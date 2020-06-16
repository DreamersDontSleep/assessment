<template>
	<div class="dormitory">
		<div class="area-title">
			<span>< 返回</span>
			<p>南园社区化肥厂宿舍旧城区改建</p>
		</div>
		<div>
			<template>
				<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
					<el-tab-pane label="结构" name="first">
						<el-button type="primary" @click="newAdd(5)">新增</el-button>
						<!-- <el-table :data="tableData1" style="width: 100%;margin-bottom: 20px;" border>
							<el-table-column type="index" width="50" label="编号"></el-table-column>
							<el-table-column prop="standard" label="标准房屋" sortable width="180"></el-table-column>
							<el-table-column prop="estimated" label="待估房屋" sortable width="180"></el-table-column>
							<el-table-column prop="coefficient" label="系数"></el-table-column>
							<el-table-column label="操作">
								<template slot-scope="scope">
									<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
									<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
								</template>
							</el-table-column>
						</el-table> -->
						<el-table
						    :data="tableData"
						    style="width: 100%;margin-bottom: 20px;"
						    row-key="id"
						    border
						    default-expand-all
						    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
						    <el-table-column
						      prop="date"
						      label="日期"
						      sortable
						      width="180">
						    </el-table-column>
						    <el-table-column
						      prop="name"
						      label="姓名"
						      sortable
						      width="180">
						    </el-table-column>
						    <el-table-column
						      prop="address"
						      label="地址">
						    </el-table-column>
						  </el-table>

					</el-tab-pane>
					<el-tab-pane label="成新" name="second">
						<el-button type="primary" @click="newAdd(9)">新增</el-button>
						<el-table :data="tableData2" style="width: 100%" border>
							<el-table-column type="index" width="50" label="编号"></el-table-column>
							<el-table-column prop="standard" label="标准房屋" sortable width="180"></el-table-column>
							<el-table-column prop="estimated" label="待估房屋" sortable width="180"></el-table-column>
							<el-table-column prop="coefficient" label="系数"></el-table-column>
							<el-table-column label="操作">
								<template slot-scope="scope">
									<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
									<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
								</template>
							</el-table-column>
						</el-table>
					</el-tab-pane>
					<el-tab-pane label="功能" name="third">
						<el-button type="primary" @click="newAdd(5)">新增</el-button>
						<el-table :data="tableData3" style="width: 100%" border>
							<el-table-column type="index" width="50" label="编号"></el-table-column>
							<el-table-column prop="standard" label="标准房屋" sortable width="180"></el-table-column>
							<el-table-column prop="estimated" label="待估房屋" sortable width="180"></el-table-column>
							<el-table-column prop="coefficient" label="系数"></el-table-column>
							<el-table-column label="操作">
								<template slot-scope="scope">
									<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
									<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
								</template>
							</el-table-column>
						</el-table>
					</el-tab-pane>
					<el-tab-pane label="区位" name="fourth">
						<el-button type="primary" @click="newAdd(11)">新增</el-button>
						<el-table :data="tableData4" style="width: 100%" border>
							<el-table-column type="index" width="50" label="编号"></el-table-column>
							<el-table-column prop="standard" label="标准房屋" sortable width="180"></el-table-column>
							<el-table-column prop="estimated" label="待估房屋" sortable width="180"></el-table-column>
							<el-table-column prop="coefficient" label="系数"></el-table-column>
							<el-table-column label="操作">
								<template slot-scope="scope">
									<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
									<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
								</template>
							</el-table-column>
						</el-table>
					</el-tab-pane>
					<el-tab-pane label="层次" name="five">
						<el-button type="primary" @click="newAdd(12)">新增</el-button>
						<el-table :data="tableData5" style="width: 100%" border>
							<el-table-column type="index" width="50" label="编号"></el-table-column>
							<el-table-column prop="standard" label="标准房屋" sortable width="180"></el-table-column>
							<el-table-column prop="estimated" label="待估房屋" sortable width="180"></el-table-column>
							<el-table-column prop="coefficient" label="系数"></el-table-column>
							<el-table-column label="操作">
								<template slot-scope="scope">
									<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
									<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
								</template>
							</el-table-column>
						</el-table>
					</el-tab-pane>
					<el-tab-pane label="朝向" name="six">
						<el-button type="primary" @click="newAdd(13)">新增</el-button>
						<el-table :data="tableData6" style="width: 100%" border>
							<el-table-column type="index" width="50" label="编号"></el-table-column>
							<el-table-column prop="standard" label="标准房屋" sortable width="180"></el-table-column>
							<el-table-column prop="estimated" label="待估房屋" sortable width="180"></el-table-column>
							<el-table-column prop="coefficient" label="系数"></el-table-column>
							<el-table-column label="操作">
								<template slot-scope="scope">
									<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
									<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
								</template>
							</el-table-column>
						</el-table>
					</el-tab-pane>
				</el-tabs>
			</template>
		</div>
		<el-dialog
		  title="提示"
		  :visible.sync="dialogVisible"
		  width="30%">
		  <el-form label-width="80px" :model="formLabelAlign">
		    <el-form-item label="标准房屋">
		      <el-input v-model="formLabelAlign.standard"></el-input>
		    </el-form-item>
		    <el-form-item label="待估房屋">
		      <el-input v-model="formLabelAlign.estimated"></el-input>
		    </el-form-item>
		    <el-form-item label="系数">
		      <el-input v-model="formLabelAlign.coefficient"></el-input>
		    </el-form-item>
		  </el-form>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="addCode(formLabelAlign)">确 定</el-button>
		  </span>
		</el-dialog>
	</div>
</template>

<script>
	import {addCode, getAllcodeData} from '@/api/data'
export default {
	data() {
		return {
			dormitory: [
				{
					evaluationNumber: '000001',
					houseUser: '张三',
					houseLocation: '安宜镇齐心村',
					assessor: '张三',
					technicalLeader: '王小二',
					projectLeader: '王小二',
					constructionArea: 100,
					assessAmount: 100000
				},
				{
					evaluationNumber: '000001',
					houseUser: '李四',
					houseLocation: '南园社区化肥厂宿舍旧城区改建',
					assessor: '李四',
					technicalLeader: '李四',
					projectLeader: '李四',
					constructionArea: 1100,
					assessAmount: 1100000
				}
			],
			trial: {},
			search: '',
			tableDataEnd: [],
			currentPage: 1,
			pageSize: 10,
			totalItems: 4,
			filterTableDataEnd: [],
			flag: false,
			trailId: '',
			activeName: 'first',
			tableData1: [],
			tableData2: [],
			tableData3: [],
			tableData4: [],
			tableData5: [],
			tableData6: [],
			tableData: [{
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [{
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
          }]
        }, {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
			dialogVisible: false,
			formLabelAlign: {
				standard: '',
				estimated: '',
				coefficient: ''
			},
			code: ''
			
		};
	},
	mounted(){
		this.getFetchData()
	},
	computed: {
		// 模糊搜索
		tables() {
			const search = this.search;
			if (search) {
				// filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
				// 注意： filter() 不会对空数组进行检测。
				// 注意： filter() 不会改变原始数组。
				return this.dormitory.filter(data => {
					// some() 方法用于检测数组中的元素是否满足指定条件;
					// some() 方法会依次执行数组的每个元素：
					// 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测;
					// 如果没有满足条件的元素，则返回false。
					// 注意： some() 不会对空数组进行检测。
					// 注意： some() 不会改变原始数组。
					return Object.keys(data).some(key => {
						// indexOf() 返回某个指定的字符在某个字符串中首次出现的位置，如果没有找到就返回-1；
						// 该方法对大小写敏感！所以之前需要toLowerCase()方法将所有查询到内容变为小写。
						return (
							String(data[key])
								.toLowerCase()
								.indexOf(search) > -1
						);
					});
				});
			}
			return this.dormitory;
		}
	},
	methods: {
		getFetchData(){
			this.initGetData()
		},
		
		
		// 初始化加载数据字典
		initGetData(){
			let para = '5,9,11,12,13'
			let that = this
			getAllcodeData(para).then(res => {
				console.log(res.body)
				let resData = res.body
				resData.forEach((item,index) => {
					if(item.code == 5){
						that.tableData1 = item.dictionaries
					}else if(item.code == 9){
						that.tableData2 = item.dictionaries
					}else if(item.code == 11){
						that.tableData4 = item.dictionaries
					}else if(item.code == 12){
						that.tableData5 = item.dictionaries
					}else if(item.code == 13){
						that.tableData6ss = item.dictionaries
					}
				})
			})
		},
		
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
			this.pageSize = val;
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
			this.currentPage = val;
		},
		handleClick(tab, event) {
			console.log(tab, event);
		},
		// load(tree, treeNode, resolve) {
		// 	setTimeout(() => {
		// 		resolve([
		// 			{
		// 				id: 31,
		// 				date: '2016-05-01',
		// 				name: '王小虎',
		// 				address: '上海市普陀区金沙江路 1519 弄'
		// 			},
		// 			{
		// 				id: 32,
		// 				date: '2016-05-01',
		// 				name: '王小虎',
		// 				address: '上海市普陀区金沙江路 1519 弄'
		// 			}
		// 		]);
		// 	}, 1000);
		// },
		newAdd(code){
			console.log(code)
			this.code = code
			this.dialogVisible = true
		},
		addCode(formLabelAlign){
			console.log(formLabelAlign)
			let para = formLabelAlign
			para.code = this.code
			addCode(para).then(res => {
				console.log(res)
				if(res.status == 200){
					this.$message.success(res.msg)
					this.dialogVisible = false
					this.initGetData()
				}
			})
		},
		handleEdit(index,row){
			console.log(index)
			console.log(row)
			this.code = row.code
			this.formLabelAlign = row
			this.dialogVisible = true
		}
			
	}
};
</script>

<style lang="scss" scoped>
.area-title {
	height: 60px;
	// background: #fff;
	line-height: 60px;
	border-bottom: 1px solid #eeeeee;
	margin-bottom: 20px;
}
.area-title span {
	float: left;
	font-size: 16px;
	color: #1890ff;
	cursor: pointer;
	margin-left: 20px;
}
.area-title p {
	margin: 0;
	padding: 0;
	text-align: center;
	font-size: 16px;
	color: rgba(0, 0, 0, 0.647058823529412);
}
</style>
