# ChatGPT Knowledge

![GitHub Workflow Status](https://github.com/xubujie/chatgpt-knowledge/actions/workflows/pre-release-build.yml/badge.svg)
![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fxubujie%2Fchatgpt-knowledge&label=VISITORS&countColor=%23dce775&style=flat-square)
![License](https://img.shields.io/github/license/wong2/chatgpt-google-extension)

---

A browser extension to display ChatGPT response to questions from Q&A platforms such as stackoverflow, quora
* [Quora](https://www.quora.com/)
* [Yahoo知恵袋](https://chiebukuro.yahoo.co.jp/)
* [知乎](https://www.zhihu.com/)
* [stackoverflow](https://stackoverflow.com/)

[Install from Chrome Web Store](https://chrome.google.com/webstore/detail/chatgpt-knowledge/chdldcpcjochbemlaclnckfkeaojibao)

## Screenshot

![quora](screenshots/quora.png?raw=true)
![zhihu](screenshots/zhihu.png?raw=true)
![yahoo](screenshots/yahoo.png?raw=true)

## Features

- Supports the official OpenAI API
- Markdown rendering
- Code highlights
- Provide feedback to improve ChatGPT
- Copy to clipboard
- Custom trigger mode

## TODOs

- [x] add zhihu support
- [x] add stackoverflow support

## Troubleshooting

### Fail to load response from ChatGPT
![failure](screenshots/failure.png)

* Wait for a minute and retry
* Or switch to manual mode

## Build from source

1. Clone the repo
2. Install dependencies with `npm`
3. `npm run build`
4. Load `build/chromium/` or `build/firefox/` directory to your browser


## Acknowledgement

* https://github.com/wong2/chatgpt-google-extension