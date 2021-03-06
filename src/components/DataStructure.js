import React from 'react'
import KonwledgePoint from './KonwledgePoint';
class DataStructure extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
        <div>
            <h1>什么是数据结构</h1>
            <ul>
                <li>
                    数据结构就是数据对象,以及存在于该对象的实例和组成实例的函数数据元素之间的各种联系。这些联系可以通过定义相关的函数来给出。
                </li>
                <li>
                    数据结构是抽象数据类型的物理实现。
                </li>
                <li>
                    数据结构是计算机中存储组织数据的方式，精心选择的数据结构可以带来最优效率的算法。
                </li>
            </ul>
            <h2>
                书城-案例
            </h2>
            <ul>
                <li>
                    <div>放书方式1:随便放 </div>
                    <div>一本一本叠起来</div>
                    <div>优点方便存储</div>
                    <div>缺点取书麻烦</div>

                </li>
                <li>
                    <div>放书方法2:按照拼音字母顺序放</div>
                    <div>优点能采用二分法查找书籍</div>
                    <div>缺点存书麻烦 每次存书需要用二分法找到书籍位置然后插入后面的每一本书都将往后位移一位</div>
                </li>
                <li>
                    <div>放书方法3:先分区再分类再按照拼音顺序来排序</div>
                    <div>插入 先判断书籍类别在用二分插入</div>
                    <div>取出 先根据类别找到对应区域然后二分查找</div>
                </li>
            </ul>
            <div>
               <p>问题一：分区的时候 分太大造成空间浪费 分太小需要平凡申请空间</p>
               <p>问题二：类别分太细造成初次查找开销大 分的比较粗局部区域工作量大</p>
               <p>结论：解决问题方法的效率，跟数据的组织方式有关</p>
               <p>解决方案 避免子项过多 如果子项过多那么继续分类</p>
            </div>
            <h2>
                print-案例
            </h2>
            <div>解决问题的效率和空间的开销有关</div>
            <h2>
                多项式计算-案例
            </h2>
            <div>
                解决问题的效率和算法的巧妙程度有关
            </div>
            <div>
                什么是数据结构
            </div>
            <div>
                <h3>逻辑结构: </h3>
                <p>一对一 : 线性结构</p>
                <p>一对多 : 树型结构</p>
                <p>多对多 : 图结构</p>
                <p>无关系 : 集合</p>
                <h3>物理存储结构:</h3>
                <p>连续存储</p>
                <p>链式存储</p>
            </div>
            <div>
                <h3>抽象数据类型</h3>
                <div>数据类型</div>
                <div>1、数据对象集</div>
                <div>2、数据集集合相关的操作集</div>
                <div>抽象</div>
                <div>1、与存放机器无关</div>
                <div>2、与数据存储的结构无关 </div>
                <div>3、与实现它的语言和算法无关</div>
            </div>
        </div>
        )
    }
}

export default DataStructure