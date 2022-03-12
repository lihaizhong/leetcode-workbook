---
outline: deep
---

# 算法

**算法（algorithm）是解决特定问题的步骤描述，通俗地讲，就是描述解决问题步骤的方法。**

算法规定了解决某一问题的具体步骤，先做什么，再做什么，最后做什么，计算机只需要依照步骤运行，就可以解决问题。通常情况下，**一个问题的解决方案可能有很多种**，也就是说，一个问题可能对应有多种算法，每种算法都可以使用多种编程语言实现。

::: tip 说明
算法只是解决问题的思路，并非具体的程序代码。算法和程序之间的关系可以这样理解：程序员需根据算法（思路）编写出计算机能识别的程序代码，然后交由计算机执行，从而解决问题。
:::

## 前置知识

编写算法的关键是**算法选型**和**数据结构选型**。合适的数据结构能大大提高算法的效率。

- [算法学习书籍](https://leetcode.cn/leetbook/)

## 算法复杂度

算法的复杂度是用**O**来表示的，旨在计算在输入数据量*N*的情况下，算法的「时间使用」和「空间使用」情况。时间（空间）复杂度的全称是渐进时间（空间）复杂度，**表示算法的执行时间与数据规模之间的增长关系**。

::: warning 警告
上面的这种时间复杂度表示法并不能真正反应一个算法的执行时间，它只是一个趋势。所以我们在分析复杂度的时候要**关注“变”，忽略“不变”**。
:::

算法复杂度主要可从**时间**、**空间**两个角度评价：

- **时间**：时间复杂度与代码的结构有着非常紧密的关系。假设各操作的运行时间为固定常数，统计算法运行的「计算操作的数量」，以代表算法运行所需时间；
- **空间**：空间复杂度与数据结构的设计有关。统计在最差情况下，算法运行所需使用的「最大空间」。（包括「输入空间」、「暂存空间」、「输出空间」）

### 复杂度规则

1. 复杂度与具体的常系数无关
2. 多项式级的复杂度相加的时候，选择高者作为结果
3. **O(1)**是一种特殊的复杂度。

### 数据结构

数据结构是为实现对计算机数据有效使用的各种数据组织形式，服务于各类计算机操作。不同的数据结构具有各自对应的适用场景，旨在降低各种算法计算的时间与空间复杂度，达到最佳的任务执行效率。

如下图所示，常见的数据结构可分为「线性数据结构」与「非线性数据结构」，具体为：「数组」、「链表」、「栈」、「队列」、「树」、「图」、「散列表」、「堆」。

![data structure](/vite_assets/data_structure.png)

## 程序优化的最核心思路

- 第一步：**暴力解法**
  - 在没有任何时间、空间约束下，完成代码任务的开发。
  - 暴力解法是程序优化的起点。
- 第二步：**无效操作处理**
  - 将代码中的无效计算、无效存储剔除，降低时间或者空间复杂度。
  - 学会并掌握递归、二分法、排序算法、动态规划等常用的算法思维。
- 第三步：**时空转换**
  - 设计合理数据结构，完成时间复杂度向空间复杂度的转移。
  - 空间是廉价的，时间是昂贵的。
  - 对数据的操作进行细分，全面掌握常见数据结构的基础知识。