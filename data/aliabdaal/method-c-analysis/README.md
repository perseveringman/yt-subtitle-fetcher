# method-c-analysis

这是对 aliabdaal 字幕数据集执行“方法C（每篇知识卡 + 全局再聚类）”后的产物目录。

## 文件说明
- `METHOD_C_REPORT.md`: 人类可读的总分析报告
- `stats.json`: 全局统计信息
- `topic_clusters.json`: 主题聚类与代表视频
- `cards.jsonl`: 每篇视频一条知识卡 JSON
- `cards_index.csv`: 便于筛选和排序的扁平索引
- `cards/`: 每篇视频对应一张 Markdown 知识卡

## 推荐用法
1. 先读 `METHOD_C_REPORT.md` 把握总体结构
2. 用 `cards_index.csv` 做主题过滤
3. 再进入 `cards/` 查看对应视频知识卡
