(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{459:function(t,r,e){"use strict";e.r(r);var s=e(1),i=Object(s.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("题目: 单细胞转录组分析显示，在肺腺癌中，与预后不良和药物耐受性有关的节律紊乱"),e("br"),t._v("\nDOI: "),e("a",{attrs:{href:"https://doi.org/10.1111/jpi.12803",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://doi.org/10.1111/jpi.12803"),e("OutboundLink")],1),e("br"),t._v("\nCite: He L, Fan Y, Zhang Y, Tu T, Zhang Q, Yuan F, Cheng C. Single-cell transcriptomic analysis reveals circadian rhythm disruption associated with poor prognosis and drug-resistance in lung adenocarcinoma. J Pineal Res. 2022 Aug;73(1):e12803.")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("相关阅读")]),t._v(" "),e("p",[t._v("微信公众号："),e("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzkwMjM0MzA5MA==&mid=2247484718&idx=1&sn=3c544d356bab2b1861de63e7f743a222&chksm=c0a7b5f3f7d03ce5128b9bacdb988d075e353575792efcf193d3d7474bc25758aecfd1eb92cd&token=1884476881&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[t._v("文献阅读：单细胞转录组分析显示，在肺腺癌中，与预后不良和药物耐受性有关的节律紊乱"),e("OutboundLink")],1)])]),t._v(" "),e("p",[e("strong",[t._v("作者介绍：")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Chao Cheng")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Fahu Yuan")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("华中科技大学")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("江汉大学")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"mailto:cnchao_cheng@hust.edu.cn"}},[t._v("cnchao_cheng@hust.edu.cn")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"mailto:yuanfh@jhun.edu.cn"}},[t._v("yuanfh@jhun.edu.cn")])])])])]),t._v(" "),e("h2",{attrs:{id:"abstract"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),e("p",[t._v("昼夜节律紊乱（CRD）是肿瘤增殖的主要促进因素。然而，CRD在癌症预后的临床预测中的作用尚未得到良好的研究。在本研究中，我们开发了一个计算算法，并实现为开源R包CRDscore，以定义肺腺癌三个代表性单细胞RNA测序数据集中的肿瘤内部昼夜节律破坏状态。我们发现，具有高CRDscore的恶性细胞特征是糖酵解和上皮-间质转化通路的激活。此外，细胞间通讯分析表明，CRD在T细胞枯竭中发挥了关键作用，这可能是该肿瘤预后不良的原因。然后，我们使用涉及22种癌症类型的公共批量转录组数据集验证了这些发现。Cox回归分析表明，CRDscore是有价值的预后生物标志物。一个包含23个昼夜节律相关基因的模型在预测14个独立队列的免疫治疗结果方面表现良好。重要的是，RNA测序检测到H1299细胞的CRDscore随着褪黑素治疗而下降。同时，细胞下调SNAIL和TWIST的表达水平，这有助于侵袭性表型的发展。总之，本研究提供了一种新的计算框架，可使用单细胞转录组数据来表征CRD状态，并进一步证实了在CRD下代谢重编程和T细胞枯竭的分子机制。对机制的更好理解可能为将“基于昼夜节律钟的抗癌方法”纳入精准医学治疗方案提供新的可能性。")]),t._v(" "),e("h2",{attrs:{id:"results"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#results"}},[t._v("#")]),t._v(" Results")]),t._v(" "),e("h3",{attrs:{id:"figure-1-crd-heterogeneity-is-found-across-different-sample-origins-in-malignant-cells"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#figure-1-crd-heterogeneity-is-found-across-different-sample-origins-in-malignant-cells"}},[t._v("#")]),t._v(" Figure 1. CRD heterogeneity is found across different sample origins in malignant cells")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://ZhengTiger.github.io/picx-images-hosting/02-%E6%96%87%E7%8C%AE%E9%98%85%E8%AF%BB-02-%E5%8D%95%E7%BB%86%E8%83%9E%E7%A9%BA%E9%97%B4%E7%BB%84/20220220_CRD/Figure1.gakecwjhzpc.webp",alt:"Figure 1"}})]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Figure 1. 在恶性细胞的不同样本来源中发现 CRD 异质性")]),t._v(" "),e("p",[e("strong",[t._v("(A)")]),t._v(" 来自 GSE131907 和 GSE123904 中 30 例肺腺癌（lung adenocarcinoma, LUAD）患者的临床和分子特征（上图）。患者按照三个样本来源中恶性细胞数量的顺序排列。每个患者贡献的细胞比例和细胞类型用不同颜色表示，与 Figure 1B 相同。灰色框表示缺失数据。"),e("br"),t._v(" "),e("strong",[t._v("(B)")]),t._v(" 捕获了患有原发肿瘤（n=17）、远处转移（n=10）和接受化疗（n=3）的患者中的恶性和非恶性细胞（total cells = 96 204），根据主要细胞类型（左）或个体患者（右）进行颜色标记的 UMAP。"),e("br"),t._v(" "),e("strong",[t._v("(C)")]),t._v(" 恶性细胞（左）和相应聚类的不同样本的相对比例（右）。 "),e("br"),t._v(" "),e("strong",[t._v("(D)")]),t._v(" 使用来自恶性细胞的 2091 个昼夜节律基因进行 WGCNA 分析构建了恶性细胞的基因共表达网络。热图显示 2091 个昼夜节律相关基因的拓扑重叠矩阵，分层聚类树状图将模块定义为分支。颜色越深，相互作用越强。"),e("br"),t._v(" "),e("strong",[t._v("(E)")]),t._v(" 来自青色、棕色和绿色模块的 358 个基因的特定网络的可视化。节点大小和颜色反映了连接的强度。"),e("br"),t._v(" "),e("strong",[t._v("(F)")]),t._v(" 恶性细胞根据 CRDscore（上图）和 11 个 clusters 中 CRDhigh 细胞的相对比例（下图）着色，而每个 cluster 的恶性细胞总数显示为折线图。"),e("br"),t._v(" "),e("strong",[t._v("(G)")]),t._v(" CRDhigh（蓝色）和 CRDlow（绿色）恶性细胞中显着激活通路的条形图。 "),e("br"),t._v(" "),e("strong",[t._v("(H)")]),t._v(" CRD 和不同来源样本中选定的标志性通路，通过 z-score 归一化。")])]),t._v(" "),e("h3",{attrs:{id:"figure-2-crd-is-associated-with-the-response-of-tki-therapy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#figure-2-crd-is-associated-with-the-response-of-tki-therapy"}},[t._v("#")]),t._v(" Figure 2. CRD is associated with the response of TKI therapy")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://ZhengTiger.github.io/picx-images-hosting/02-%E6%96%87%E7%8C%AE%E9%98%85%E8%AF%BB-02-%E5%8D%95%E7%BB%86%E8%83%9E%E7%A9%BA%E9%97%B4%E7%BB%84/20220220_CRD/Figure2.igjsyob6o1k.webp",alt:"Figure 2"}})]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Figure 2. CRD 与 TKI 治疗的反应相关")]),t._v(" "),e("p",[e("strong",[t._v("(A)")]),t._v(" 在 22 名接受 TKI 的患者中捕获的恶性和非恶性细胞 (total cells = 21 604) 的 UMAP。"),e("br"),t._v(" "),e("strong",[t._v("(B)")]),t._v(" 计算每种细胞类型的 Epithelial scores，并表示为上皮标记基因的平均表达（上）。显示了 TKI 组之间的细胞群分布（中）和每种细胞类型的 CRDscore 箱线图（下）。"),e("br"),t._v(" "),e("strong",[t._v("(C)")]),t._v(" 恶性细胞（左）和免疫细胞（右）的 tSNE 图，根据 TKI 组着色。TKI 组根据时间点将样本分为三组：开始靶向治疗前（TN）、完全或部分反应状态（RD）和进行性疾病（PD），其中肿瘤已获得耐药性。"),e("br"),t._v(" "),e("strong",[t._v("(D)")]),t._v(" 4258 个恶性细胞分别根据 TKI 组（左）和 CRD 水平（右）着色。"),e("br"),t._v(" "),e("strong",[t._v("(E)")]),t._v(" 肿瘤样本的 CRDscore 是基于整体细胞的平均值。"),e("br"),t._v(" "),e("strong",[t._v("(F)")]),t._v(" CRDhigh 组（红色）和 CRDlow 组（蓝色）患者的总体反应率。"),e("br"),t._v(" "),e("strong",[t._v("(G)")]),t._v(" 患者按照恶性细胞内 CRDscore 的顺序排列，并合并为 CRDhigh 和 CRDlow 组（上）。火山图显示来自 CRDhigh 细胞的差异表达基因（与 CRDlow 细胞相比），显着改变的基因以红色（上调）或绿色（下调）显示，突出显示葡萄糖和脂质相关基因。"),e("br"),t._v(" "),e("strong",[t._v("(H)")]),t._v(" 热图显示了具有 CRDhigh 的恶性细胞的富集信号通路。灰色框表示未显着富集，NES, normalized enrichment score。"),e("br"),t._v(" "),e("strong",[t._v("(I)")]),t._v(" 来自 PD（蓝色）和 RD（红色）样本的 CRDhigh 和 CRDlow 细胞的 GSEA 分析。条形码图表示基因集中的基因及其在 log2 fold changes 方面的顺序位置。最大的 positive log2 fold changes 在图的左侧，而最大的 negative log2 fold changes 在右侧。"),e("br"),t._v(" "),e("strong",[t._v("(J-K)")]),t._v(" 与 CRDscore 最相关的前 30 个葡萄糖/脂质代谢相关基因（J 和 K，左）。散点图显示了 CRDscore 与伪细胞中选定基因之间的相关性（J 和 K，右）。x 轴上的 marginal boxplots 表示 CRDscore 的分布，而 y 轴是选定的代谢相关基因的表达水平。CRD, circadian rhythm disruption; GSEA, Gene Set Enrichment Analysis; SD, standard deviation; TKI, tyrosine kinase inhibitor。")])]),t._v(" "),e("h3",{attrs:{id:"figure-3-cell-cell-ligand-receptor-lrs-and-cytokine-related-pathway-network-analysis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#figure-3-cell-cell-ligand-receptor-lrs-and-cytokine-related-pathway-network-analysis"}},[t._v("#")]),t._v(" Figure 3. Cell–cell ligand-receptor (LRs) and cytokine-related pathway network analysis")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://ZhengTiger.github.io/picx-images-hosting/02-%E6%96%87%E7%8C%AE%E9%98%85%E8%AF%BB-02-%E5%8D%95%E7%BB%86%E8%83%9E%E7%A9%BA%E9%97%B4%E7%BB%84/20220220_CRD/Figure3.gifz3tw4y80.webp",alt:"Figure 3"}})]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Figure 3. 细胞-细胞配体-受体 (LRs) 和细胞因子相关通路网络分析")]),t._v(" "),e("p",[e("strong",[t._v("(A-C)")]),t._v(" 恶性细胞和 T 细胞亚群通过 LR 相互作用，分为趋化因子(chemokines) (A)、共刺激因子(costimulatory factors) (B) 和共抑制因子(coinhibitory factors) (C)。"),e("br"),t._v(" "),e("strong",[t._v("(D–F)")]),t._v(" 巨噬细胞和 T 细胞亚群之间的相互作用。"),e("br"),t._v(" "),e("strong",[t._v("(G-H)")]),t._v(" 树状图显示了在 CRDhigh (G) 或 CRDlow 条件 (H) 下计算的恶性细胞/巨噬细胞和 T 细胞亚群之间的配体-受体连接。"),e("br"),t._v(" "),e("strong",[t._v("(I)")]),t._v(" 细胞因子通路活性与恶性细胞、T 细胞标志物和巨噬细胞标志物的相互作用。CRDhigh malignant cells(red bars in upper panel) 或 LUAD samples (cyan bars, bottom panel) 中 36 种细胞因子信号的活性与 T cell markers (purple bars, right panel) 和 macrophage markers (yellow bars, left panel) 呈正相关 (r > .2 & p < .01) 。"),e("br"),t._v(" "),e("strong",[t._v("(J)")]),t._v(" 代表性细胞因子在多种细胞类型中的信号活动总结。气泡热图显示 malignant cells with CRD (high vs. low)、T cells、macrophages 之间的信号活动存在显着差异。")])]),t._v(" "),e("h3",{attrs:{id:"figure-4-validation-of-358-gene-expression-signatures-for-crd-status-in-bulk-transcriptomic-datasets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#figure-4-validation-of-358-gene-expression-signatures-for-crd-status-in-bulk-transcriptomic-datasets"}},[t._v("#")]),t._v(" Figure 4. Validation of 358 gene expression signatures for CRD status in bulk transcriptomic datasets")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://ZhengTiger.github.io/picx-images-hosting/02-%E6%96%87%E7%8C%AE%E9%98%85%E8%AF%BB-02-%E5%8D%95%E7%BB%86%E8%83%9E%E7%A9%BA%E9%97%B4%E7%BB%84/20220220_CRD/Figure4.49qoezuvfak0.webp",alt:"Figure 4"}})]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Figure 4. 验证 bulk 转录组数据集中 CRD 状态的 358 个基因表达特征")]),t._v(" "),e("p",[e("strong",[t._v("(A)")]),t._v(" 热图和箱线图分别描绘了 358 个 CRG 的表达水平和 CRDscore 水平（底部），数据通过 z-score 归一化。三个 GEO 数据集的样本分被为 CRD 和 control 组。"),e("br"),t._v(" "),e("strong",[t._v("(B)")]),t._v(" CRDscore 在五个经过验证的数据集中随时间的变化。水平虚线表示对照样本的 CRDscore 平均值（左）。桑基图显示了不同信号通路的 CRDscore 和 GSVA score 之间的相关性。条带宽度与相关系数成正比，负相关以透明色表示。"),e("br"),t._v(" "),e("strong",[t._v("(C)")]),t._v(" 估计来自 TCGA-LUAD 数据集的 CRDhigh 样本与 CRDlow 样本的免疫评分和肿瘤纯度。"),e("br"),t._v(" "),e("strong",[t._v("(D)")]),t._v(" Circos 图显示了来自 TCGA-LUAD 数据集的 CRDscore 和 TIL 之间的相关性。粗细与阳性和阴性强弱成正比。免疫细胞分为适应性免疫反应和先天免疫反应（内圈），而外圈包含三个预后组。"),e("br"),t._v(" "),e("strong",[t._v("(E)")]),t._v(" CRD 亚组内免疫反应相关因子（抗原呈递相关因子、共抑制和共刺激因子）的表达谱。"),e("br"),t._v(" "),e("strong",[t._v("(F)")]),t._v(" TCGA-LUAD 数据集中 CRDhigh 与 CRDlow 的富集标志途径（上）和代谢途径（下）。根据倍数变化对基因进行排序，上调最显着的基因位于顶部，下调基因位于底部。")])]),t._v(" "),e("h3",{attrs:{id:"figure-5-clinical-characteristics-of-crd-groups-high-and-low-in-multiple-independent-cohorts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#figure-5-clinical-characteristics-of-crd-groups-high-and-low-in-multiple-independent-cohorts"}},[t._v("#")]),t._v(" Figure 5. Clinical characteristics of CRD groups (high and low) in multiple independent cohorts")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://ZhengTiger.github.io/picx-images-hosting/02-%E6%96%87%E7%8C%AE%E9%98%85%E8%AF%BB-02-%E5%8D%95%E7%BB%86%E8%83%9E%E7%A9%BA%E9%97%B4%E7%BB%84/20220220_CRD/Figure5.5xveqjkgy6w0.webp",alt:"Figure 5"}})]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Figure 5. 多个独立队列中 CRD 组（高和低）的临床特征")]),t._v(" "),e("p",[e("strong",[t._v("(A-C)")]),t._v(" 使用 smoothHR 的 TCGA-LUAD (A)、GSE31210 (B) 和 GSE72094 (C) 对所有时间死亡风险对 CRDscore 依赖性的非参数估计。"),e("br"),t._v(" "),e("strong",[t._v("(D–F)")]),t._v(" 独立队列中 CRDhigh 和 CRDlow 组的 Kaplan–Meier 生存曲线。"),e("br"),t._v(" "),e("strong",[t._v("(G)")]),t._v(" 森林图显示了四个数据集中 CRDhigh 和 CRDlow 的风险比（95% 置信区间）；每个子组都有一个单独的 Cox 模型。"),e("br"),t._v(" "),e("strong",[t._v("(H)")]),t._v(" 在 22 种 TCGA 癌症类型的 7577 个样本中计算了 CRDscore。灰色虚线表示所有样本的 CRDscore 的中值。"),e("br"),t._v(" "),e("strong",[t._v("(I)")]),t._v(" 基于 CRDscore 的中值作为截止值（上图中的灰色虚线），在多种癌症类型中具有 CRDhigh 和 CRDlow 分类的样本百分比。"),e("br"),t._v(" "),e("strong",[t._v("(J)")]),t._v(" 跨 TCGA 癌症类型 (n = 17) 的肿瘤样本和相邻正常样本之间的 CRDscore 差异。"),e("br"),t._v(" "),e("strong",[t._v("(K)")]),t._v(" 基于不同癌症类型 (n = 22) 的单变量和多变量 Cox 比例风险模型，CRD 状态与患者总生存时间的关联。")])]),t._v(" "),e("h3",{attrs:{id:"figure-6-crgm-contributed-to-predicting-the-response-to-immunotherapy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#figure-6-crgm-contributed-to-predicting-the-response-to-immunotherapy"}},[t._v("#")]),t._v(" Figure 6. CRGm contributed to predicting the response to immunotherapy")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://ZhengTiger.github.io/picx-images-hosting/02-%E6%96%87%E7%8C%AE%E9%98%85%E8%AF%BB-02-%E5%8D%95%E7%BB%86%E8%83%9E%E7%A9%BA%E9%97%B4%E7%BB%84/20220220_CRD/Figure6.5k54blxq88g0.webp",alt:"Figure 6"}})]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Figure 6. CRGm 有助于预测对免疫疗法的反应")]),t._v(" "),e("p",[e("strong",[t._v("(A-B)")]),t._v(" 比较来自 GSE42127 (A) 和 GSE14814 (B) 数据集的化疗患者 CRDscore 水平的 OS。显示了 Kaplan-Meier 生存曲线。"),e("br"),t._v(" "),e("strong",[t._v("(C)")]),t._v(" TKI 治疗患者中 CRDhigh 和 CRDlow 的 Kaplan-Meier 无进展生存曲线。"),e("br"),t._v(" "),e("strong",[t._v("(D)")]),t._v(" PD/NR 之间的 CRDscore 比较，来自四个 BRCA 队列的 RD 患者接受了化疗。"),e("br"),t._v(" "),e("strong",[t._v("(E)")]),t._v(" 在 TCGA-LUAD 数据集中，按类时钟特征状态（左）和类时钟特征状态与 CRDscore 水平（右）分类的 Kaplan–Meier 生存曲线。"),e("br"),t._v(" "),e("strong",[t._v("(F)")]),t._v(" CRG 由 LASSO 和 SVM-RFE 算法选择。垂直灰线分别表示 LASSO 的最佳 lambda 值和 SVM-REF 的最低错误率。"),e("br"),t._v(" "),e("strong",[t._v("(G)")]),t._v(" 来自四个代表性队列的接受免疫疗法治疗的 PD/NR 和 RD 患者之间 CRGm、GEPscore 和 PDL1 的比较。"),e("br"),t._v(" "),e("strong",[t._v("(H)")]),t._v(" CRGm 在六个代表性验证数据集中预测免疫治疗反应的性能的 ROC 曲线。"),e("br"),t._v(" "),e("strong",[t._v("(I)")]),t._v(" 条形图显示了 CRGm 在四种癌症类型的 14 个不同队列中对免疫疗法的总体预测准确性。"),e("br"),t._v(" "),e("strong",[t._v("(J)")]),t._v(" 条形图显示了 CRGm 与基于基因表达数据的其他免疫治疗反应特征的性能比较。")])]),t._v(" "),e("h3",{attrs:{id:"figure-7-validated-experiments-related-to-crd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#figure-7-validated-experiments-related-to-crd"}},[t._v("#")]),t._v(" Figure 7. Validated experiments related to CRD")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://ZhengTiger.github.io/picx-images-hosting/02-%E6%96%87%E7%8C%AE%E9%98%85%E8%AF%BB-02-%E5%8D%95%E7%BB%86%E8%83%9E%E7%A9%BA%E9%97%B4%E7%BB%84/20220220_CRD/Figure7.2831j7rbdjbw.webp",alt:"Figure 7"}})]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Figure 7. CRD 相关的验证实验")]),t._v(" "),e("p",[e("strong",[t._v("(A)")]),t._v(" clock、per1、cry1 的相对 mRNA 水平，在 BEAS-2B、A549、H1299 细胞系中，通过实时 PCR 检测。"),e("br"),t._v(" "),e("strong",[t._v("(B)")]),t._v(" 在使用 siRNA 沉默 CLOCK 或孵育褪黑素 24 小时后，以及对照组后，显示了含有基底膜的转移孔试验的代表性图像。"),e("br"),t._v(" "),e("strong",[t._v("(C)")]),t._v(" PCA 图显示了褪黑素处理、siCLOCK 或对照组（无血清处理）的聚类情况。根据 PERMANOVA 测试，不同组之间的主坐标分析（PCoA）确定了每个聚类内的内部变化。圆圈和误差棒表示 pc1 和 pc2 值的均值和标准误差（内部缩小图示）。"),e("br"),t._v(" "),e("strong",[t._v("(D)")]),t._v(" Venn 图比较了褪黑素处理、siCLOCK 或 H1299 细胞的 DEGs（差异表达基因）。"),e("br"),t._v(" "),e("strong",[t._v("(E)")]),t._v(" 左侧：气泡图显示了根据不同组的代表性 GO 术语。右侧：热图表征不同组独特 DEGs 的平均表达水平（在褪黑素组中显示的前100个基因代表性）；每个基因的值都经过行缩放。"),e("br"),t._v(" "),e("strong",[t._v("(F)")]),t._v(" 九个样本中 SNAIL（log2(TPM+1)）的表达与 CRDscore 之间的相关性。"),e("br"),t._v(" "),e("strong",[t._v("(G)")]),t._v(" 箱线图显示了三个组中的 CRDscore。组之间的统计差异通过学生t检验确定。")])])])}),[],!1,null,null,null);r.default=i.exports}}]);