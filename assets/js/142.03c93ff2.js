(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{495:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("GitHub: "),a("a",{attrs:{href:"https://github.com/chris-mcginnis-ucsf/DoubletFinder",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/chris-mcginnis-ucsf/DoubletFinder"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("相关阅读")]),t._v(" "),a("p",[t._v("微信公众号："),a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzkwMjM0MzA5MA==&mid=2247484006&idx=1&sn=6a6849fb39e9c2f4af8a1a48226cec49&chksm=c0a7b2bbf7d03bad7b582618b314ed059f19303cb27b4344c886fa85fed451644b6200107639&token=549238884&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[t._v("DoubletFinder：用于检测scRNAseq数据中双细胞的R包"),a("OutboundLink")],1)]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("站内文章：")]),t._v(" "),a("ol",[a("li",[a("RouterLink",{attrs:{to:"/pages/71b694/"}},[t._v("文献阅读 --- DoubletFinder:Doublet Detection in Single-Cell RNA Sequencing Data Using Artificial Nearest Neighbors")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/pages/a35823/"}},[t._v("DoubletFinder：R package for detecting doublets in single-cell RNA sequencing data")])],1)])]),t._v(" "),a("p",[a("strong",[t._v("作者介绍")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Zev Gartner")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"https://pharmacy.ucsf.edu/sites/pharmacy.ucsf.edu/files/styles/pharmacy_square_0_75x/public/person/photo/RS4183_Zev%20Gartner%2010-hpr.jpg?itok=H-3BF9Ki&timestamp=1528749447",width:"200"}})])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("University of California, San Francisco")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"mailto:zev.gartner@ucsf.edu"}},[t._v("zev.gartner@ucsf.edu")])])])])]),t._v(" "),a("h2",{attrs:{id:"doubletfinder-原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#doubletfinder-原理"}},[t._v("#")]),t._v(" DoubletFinder 原理")]),t._v(" "),a("p",[t._v("DoubletFinder 可以分为以下几个步骤:\n"),a("img",{attrs:{src:"https://ZhengTiger.github.io/picx-images-hosting/03-%E7%94%9F%E4%BF%A1%E5%AD%A6%E4%B9%A0/01-%E7%94%9F%E4%BF%A1%E5%B7%A5%E5%85%B7-%E5%8D%95%E7%BB%86%E8%83%9E%E7%A9%BA%E9%97%B4%E7%BB%84/02-DoubletFinder/1.DoubletFinderOverview.7eo5pfb5ssw0.webp",alt:"DoubletFinderOverview"}})]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Original Data:")]),t._v(" 完成 Seurat 标准的聚类程序后，可能会存在一些中间状态的细胞 (图中？标注的蓝色和橙色细胞)，这些中间状态的细胞很可能就是双细胞。")]),t._v(" "),a("li",[a("strong",[t._v("Simulate Doublets:")]),t._v(" DoubletFinder 会通过平均随机细胞对的基因表达谱，从现有的 scRNA-seq 数据中以确定的比例 (pN) 生成 artificial doublets (红色)。")]),t._v(" "),a("li",[a("strong",[t._v("PCA:")]),t._v(" DoubletFinder 将生成的人工双细胞合并到原始数据中进行 PCA 降维。")]),t._v(" "),a("li",[a("strong",[t._v("Compute pANN:")]),t._v(" DoubletFinder 检测 PC 空间中每个真实细胞的邻域大小 (pK) 内的邻近细胞 ，计算这些邻近细胞中人工双细胞的比率 (pANN)。")]),t._v(" "),a("li",[a("strong",[t._v("Threshold pANN:")]),t._v(" DoubletFinder 将 pANN 值最高的前 n 个真实细胞预测为双细胞，n 值根据经验双细胞比率 (nExp) 参数指定。")]),t._v(" "),a("li",[a("strong",[t._v("Doublets Removed:")]),t._v(" 在 Seurat 对象中将 DoubletFinder 标记的双细胞去除。")])]),t._v(" "),a("h2",{attrs:{id:"doubletfinder-使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#doubletfinder-使用"}},[t._v("#")]),t._v(" DoubletFinder 使用")]),t._v(" "),a("p",[t._v("DoubletFinder 使用以下参数:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("seu:")]),t._v(" 这是一个完整处理过的 Seurat 对象 (即，在 NormalizeData，FindVariableGenes，ScaleData，RunPCA，RunTSNE 全部运行之后)。")]),t._v(" "),a("li",[a("strong",[t._v("PCs:")]),t._v(" 具有统计意义的主成分的数量，默认 PCs = 1:10 。")]),t._v(" "),a("li",[a("strong",[t._v("pN:")]),t._v(" 定义生成人工双细胞的数目比例，默认 pN = 0.25，DoubletFinder 的性能受 pN 的影响较小。")]),t._v(" "),a("li",[a("strong",[t._v("pK:")]),t._v(" 用于计算 pANN (proportion of artificial nearest neighbors) 的 PC 邻域大小。在数据分布中，BC (bimodality coefficient，双峰性系数) 用来衡量与单峰分布的偏离程度。DoubletFinder 通过 find.pK() 函数来计算 BC 值，BC 值最大时为最优 pK 值。")]),t._v(" "),a("li",[a("strong",[t._v("nExp:")]),t._v(" 根据经验定义的双细胞的数目，参考 10X 平台的双细胞率，每 1000 个细胞双细胞比率增加 0.8% 。")])]),t._v(" "),a("p",[t._v("使用示例：")]),t._v(" "),a("div",{staticClass:"language-R line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("library"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Seurat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlibrary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dplyr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlibrary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DoubletFinder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 以Seurat官网的pbmc3k数据为例")]),t._v("\nseuratobject "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" readRDS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pbmc3k_final.rds"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nncol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seuratobject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 细胞数 2638")]),t._v("\nDimPlot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seuratobject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reduction"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'umap'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pK Identification (no ground-truth) ------------------------------------------")]),t._v("\nsweep.res.list "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" paramSweep_v3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seuratobject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PCs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sct "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsweep.stats "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" summarizeSweep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sweep.res.list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" GT "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbcmvn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" find.pK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sweep.stats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npK "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" bcmvn"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("pK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("which.max"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bcmvn"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("BCmetric"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token percent-operator operator"}},[t._v("%>%")]),t._v(" as.character"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token percent-operator operator"}},[t._v("%>%")]),t._v(" as.numeric"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Homotypic Doublet Proportion Estimate ----------------------------------------")]),t._v("\nDoubletRate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" ncol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seuratobject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.008")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# DoubletRate为双细胞比率，参考10X平台的双细胞率，每1000个细胞双细胞比率增加0.8%")]),t._v("\nhomotypic.prop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" modelHomotypic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seuratobject"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("seurat_clusters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnExp_poi "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" round"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DoubletRate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("nrow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seuratobject"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v("meta.data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnExp_poi.adj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" round"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nExp_poi"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("homotypic.prop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Run DoubletFinder with varying classification stringencies ------------------")]),t._v("\nseuratobject "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" doubletFinder_v3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seuratobject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PCs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pN "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.25")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pK "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nExp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nExp_poi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reuse.pANN "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sct "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nseuratobject "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" doubletFinder_v3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seuratobject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PCs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pN "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.25")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pK "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nExp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nExp_poi.adj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reuse.pANN "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sct "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# DoubletFinder结果")]),t._v("\nseuratobject"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v("meta.data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DF_hi.lo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" seuratobject"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("DF.classifications_0."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),t._v("_0."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("03")]),t._v("_56\nseuratobject"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v("meta.data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("DF_hi.lo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("which"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seuratobject"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v("meta.data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("DF_hi.lo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Doublet"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" \n                                      seuratobject"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v("meta.data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("DF.classifications_0."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),t._v("_0."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("03")]),t._v("_46 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Singlet"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Doublet-Low Confidience"')]),t._v("\nseuratobject"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v("meta.data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("DF_hi.lo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("which"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seuratobject"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v("meta.data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("DF_hi.lo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Doublet"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" \n                                      seuratobject"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v("meta.data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("DF.classifications_0."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),t._v("_0."),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("03")]),t._v("_46 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Doublet"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Doublet-High Confidience"')]),t._v("\ntable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seuratobject"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v("meta.data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("DF_hi.lo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# high:46, low:10, singlet:2582")]),t._v("\nDimPlot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seuratobject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" group.by "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DF_hi.lo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cols "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"black"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"red"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gold"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("reduction "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'umap'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nseuratobject "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" subset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seuratobject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cells "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rownames"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seuratobject"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v("meta.data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("which"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seuratobject"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v("meta.data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("DF_hi.lo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Singlet'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nncol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seuratobject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 细胞数 2582，去除了56个双细胞")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br")])]),a("p",[t._v("DoubletFinder结果:\n"),a("img",{attrs:{src:"https://ZhengTiger.github.io/picx-images-hosting/03-%E7%94%9F%E4%BF%A1%E5%AD%A6%E4%B9%A0/01-%E7%94%9F%E4%BF%A1%E5%B7%A5%E5%85%B7-%E5%8D%95%E7%BB%86%E8%83%9E%E7%A9%BA%E9%97%B4%E7%BB%84/02-DoubletFinder/2.DoubletFinder_result.46lg08sivyg0.webp",alt:"DoubletFinder"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);