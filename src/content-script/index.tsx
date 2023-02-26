import { render } from 'preact'
import '../base.css'
import { getUserConfig } from '../config'
import ChatGPTContainer from './ChatGPTContainer'
import { config, SearchEngine } from './site-config'
import './styles.scss'
import { getPossibleElementByQuerySelector } from './utils'

const siteRegex = new RegExp(Object.keys(config).join('|'))
const siteName = location.hostname.match(siteRegex)![0]
const siteConfig = config[siteName]

async function mount(question: string, siteConfig: SearchEngine) {
  const container = document.createElement('div')
  const userConfig = await getUserConfig()
  container.className = 'chat-gpt-container'
  container.classList.add('gpt-light')

  const siderbarContainer = getPossibleElementByQuerySelector(siteConfig.sidebarContainerQuery)
  if (siderbarContainer) {
    if (siteName === 'yahoo') {
      siderbarContainer.insertAdjacentElement("afterend", container)
    }
    if (siteName === 'quora' || siteName === 'zhihu') {
      siderbarContainer.prepend(container)
    }
  }
  render(
    <ChatGPTContainer question={question} triggerMode={userConfig.triggerMode || 'always'}/>,
    container,
  )
}

async function run() {
  const question = getPossibleElementByQuerySelector<HTMLInputElement>(siteConfig.questionQuery)
  if (question && question.textContent) {
    const q = question.textContent.trim()
    mount(q, siteConfig)
  }
}

run()

if (siteConfig.watchRouteChange) {
  siteConfig.watchRouteChange(run)
}
