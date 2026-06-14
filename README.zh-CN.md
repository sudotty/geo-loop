# GeoLoop

**GitHub 原生的 SEO / GEO / ASO 增长自动化闭环。**

GeoLoop 是一个面向网站、AI 产品、SaaS 落地页、文档站和 App Store 产品的 GitHub 原生增长自动化系统。它的目标是持续发现 SEO、GEO 和 ASO 机会，将这些机会转成 GitHub Issues，再让 Copilot / Claude Code / Codex / 其他 AI Agent 创建 Pull Request，验证变更，并持续衡量增长结果。

> **GeoLoop 把 GitHub 仓库变成一个可自我进化的增长系统。**

---

## 语言

- [English](README.md)
- [简体中文](README.zh-CN.md)
- [日本語](README.ja.md)
- [한국어](README.ko.md)
- [Español](README.es.md)

---

## GeoLoop 是什么？

传统 SEO / ASO 工作通常是手工流程：

```text
关键词研究 -> 写内容 -> 发布 -> 等待排名 -> 查看数据 -> 手动调整
```

GeoLoop 将它改造成一个工程化闭环：

```text
发现信号 -> 评分 -> 创建 Issue -> Agent 修改 -> Pull Request -> 验证 -> 合并 -> 监测 -> 复盘 -> 下一轮
```

核心观点：

> **增长工作也应该像软件一样被版本化、审查、测试、合并、回滚和复盘。**

---

## SEO、GEO、ASO

### SEO：搜索引擎优化

面向 Google、Bing 等传统搜索引擎。

GeoLoop 可以关注：

- 页面标题
- Meta description
- Canonical
- Sitemap
- Robots.txt
- Open Graph
- 结构化数据
- 内链
- FAQ 页面
- 对比页面
- 教程页面
- 报错解决页面

### GEO：生成式引擎优化

面向 ChatGPT、Perplexity、Gemini、Claude、Google AI Overview 等 AI 搜索和答案引擎。

GEO 更重视：

- 清晰定义
- 目标用户
- 对比表
- FAQ
- 证据与来源
- 可引用的事实
- 更新时间
- 与竞品的差异
- AI answer-ready 内容

GeoLoop 不承诺保证进入任何 AI 答案。GEO 是概率性的，只能通过结构、证据、语义覆盖和持续实验提高可见性。

### ASO：App Store 优化

面向 App Store / Google Play 的搜索与转化。

GeoLoop 可以生成：

- App 名称候选
- Subtitle 候选
- Keyword ideas
- 截图文案
- Release note 草稿
- 多语言本地化草稿
- 竞品 metadata 分析
- 评论语言提取

默认不自动提交 App Store 变更，只生成草稿，保留人工审核。

---

## 为什么用 GitHub？

GitHub 不只是代码仓库，也可以是公开可信的增长工作台。

| GitHub 资产 | 增长价值 |
|---|---|
| README | 产品定位、安装说明、AI 可读实体页 |
| Issues | 需求、关键词、痛点、增长任务 |
| Pull Requests | 可审查、可回滚的增长变更 |
| Releases | 新鲜度和产品演进证据 |
| GitHub Actions | 自动化调度和验证 |
| GitHub Pages | 文档站、SEO/GEO 页面 |
| Copilot / AI Agent | 根据 Issue 创建代码和内容 PR |

GeoLoop 的强点不是“自动写文章”，而是把增长工作变成 GitHub-native workflow。

---

## 核心循环

```text
[外部信号]
Reddit / HN / GitHub Search / App Store Reviews / Google Trends / Competitor Docs
        ↓
[GitHub Actions]
定时抓取、清洗、聚类、打分
        ↓
[Growth Issues]
每个关键词、竞品缺口、ASO 机会、GEO 缺口生成一个结构化 Issue
        ↓
[AI Agent]
Copilot / Claude Code / Codex / Gemini CLI 根据 Issue 修改 README、docs、Pages、metadata
        ↓
[Pull Request]
小 PR、可审查、可回滚
        ↓
[Publish]
README / Docs / GitHub Pages / 官网 / App Store metadata drafts
        ↓
[Measure]
GSC clicks、impressions、AI mention rate、ASO keyword rank、conversion
        ↓
[Next Loop]
保留、加码、回滚、本地化、停止
```

---

## 目标用户

| 用户 | 痛点 | GeoLoop 承诺 |
|---|---|---|
| 独立开发者 | 没时间做 SEO/GEO/ASO | 每周生成可执行的增长 Issue 和 PR |
| SaaS 创始人 | 需要落地页、对比页、AI 可见性 | 把增长任务沉淀到 GitHub |
| App 开发者 | 需要 App Store 关键词和截图文案迭代 | ASO 研究和 metadata 草稿 |
| 技术型营销人员 | 想自动化但不想失控 | GitHub PR 审查和可回滚流程 |
| Agency | 需要可复制的客户交付流程 | 标准化报告、Issue 和 PR 模板 |

---

## 当前状态

当前版本是 **可运行骨架**，不是完整生产系统。

已经具备：

- 产品定位文档
- Roadmap
- Product Requirements
- User Flow
- Architecture
- Copilot / AI Agent 指令
- Growth Task Issue 模板
- TypeScript 项目骨架
- 初始评分模型
- 初始 Markdown 报告生成器
- 示例 CLI
- 示例 GitHub Actions workflow

当前 CLI：

```bash
npm install
npm run build
npm run scan
npm run report
```

下一步优先级：

```text
README/docs scanner -> real score output -> issue draft generation -> GitHub Action weekly report
```

---

## Roadmap

详见：

- [ROADMAP.md](ROADMAP.md)
- [Product Requirements](docs/PRODUCT_REQUIREMENTS.md)
- [User Flow](docs/USER_FLOW.md)
- [Architecture](docs/ARCHITECTURE.md)

---

## 安全边界

GeoLoop 可以激进地发现机会，但必须保守地执行变更。

允许：

- 竞品 changelog 监控
- 公开关键词研究
- Reddit / HN / GitHub Search 需求挖掘
- App Store 评论语言提取
- 真实对比页
- 真实 benchmark 页面
- 自动生成 Issue
- AI Agent 创建小 PR
- 人工 Review 后合并

禁止：

- 假评论
- 假 benchmark
- 假客户案例
- 假 AI 引用截图
- 买 star / fork
- 抄袭竞品内容
- keyword stuffing
- spam 第三方仓库
- 自动提交 App Store 变更
- 未审核修改价格、隐私、支付、法律页面

原则：

```text
攻击信息差，不攻击信任系统。
```

---

## License

MIT
