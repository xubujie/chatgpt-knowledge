export interface SearchEngine {
  questionQuery: string[]
  sidebarContainerQuery: string[]
  appendContainerQuery: string[]
  watchRouteChange?: (callback: () => void) => void
}

export const config: Record<string, SearchEngine> = {
  yahoo: {
    questionQuery: ['.ClapLv2QuestionItem_Chie-QuestionItem__Text__1AI-5 p'],
    sidebarContainerQuery: ['#que'],
    appendContainerQuery: ['#cols', '#contents__wrap'],
  },
  quora: {
    questionQuery: ['.qu-userSelect--text'],
    sidebarContainerQuery: ['.dom_annotate_question_answer_item_0'],
    appendContainerQuery: ['#cols', '#contents__wrap'],    
  },
  zhihu: {
    questionQuery: ['.QuestionHeader-title'],
    sidebarContainerQuery: ['.QuestionAnswer-content'],
    appendContainerQuery: ['#cols', '#contents__wrap'],    
  },
  stackoverflow: {
    questionQuery: ['.js-post-body'],
    sidebarContainerQuery: ['.post-layout'],
    appendContainerQuery: ['#cols', '#contents__wrap'],
  }
}
