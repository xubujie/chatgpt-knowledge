# ChatGPT Knowledge

![GitHub Workflow Status]()
![Visitors]()
![License]()

---

A browser extension to display ChatGPT response to questions from Q&A platforms
* [Quora](https://www.quora.com/)
* [Yahoo知恵袋](https://chiebukuro.yahoo.co.jp/)

[Install from Chrome Web Store]()

[Install from Mozilla Add-on Store]()

## Screenshot

![Quora](screenshots/quora.png?raw=true)

![yahoo](screenshots/yahoo.png?raw=true)

## Features

- Supports the official OpenAI API
- Markdown rendering
- Code highlights
- Provide feedback to improve ChatGPT
- Copy to clipboard
- Custom trigger mode

## TODOs

- [ ] add zhihu support

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


## Used repos

* https://github.com/wong2/chatgpt-google-extension