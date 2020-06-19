<template>
	<div class="dormitory">
		<div class="area-title">
			<p>南园社区化肥厂宿舍旧城区改建</p>
		</div>
		<div>
			<template>
				<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
					<el-tab-pane label="结构" name="8">
						<!-- <el-button type="primary" @click="newAdd(5)">新增项目节点</el-button> -->
						<el-table :data="tableData" style="width: 100%;margin-bottom: 20px;" 
						row-key="id"
						border
						default-expand-all
						:tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
							<el-table-column prop="parentId" label="项目编号"></el-table-column>
							<el-table-column prop="standard" label="标准房屋" width="180"></el-table-column>
							<el-table-column prop="estimated" label="待估房屋" width="180"></el-table-column>
							<el-table-column prop="coefficient" label="系数"></el-table-column>
							<el-table-column label="操作">
								<template slot-scope="scope">
									<el-button v-if="!scope.row.isParent" type="primary" @click="newChildAdd(scope.row)">新增子节点</el-button>
									<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
									<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
								</template>
							</el-table-column>
						</el-table>
					</el-tab-pane>
					<el-tab-pane label="成新" name="9">
						<!-- <el-button type="primary" @click="newAdd(9)">新增</el-button> -->
						<el-table :data="tableData" style="width: 100%" 
						row-key="id"
						border
						default-expand-all
						:tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
							<el-table-column prop="parentId" label="项目编号"></el-table-column>
							<el-table-column prop="standard" label="标准房屋" sortable width="180"></el-table-column>
							<el-table-column prop="estimated" label="待估房屋" sortable width="180"></el-table-column>
							<el-table-column prop="coefficient" label="系数"></el-table-column>
							<el-table-column label="操作">
								<template slot-scope="scope">
									<el-button v-if="!scope.row.isParent" type="primary" @click="newChildAdd(scope.row)">新增子节点</el-button>
									<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
									<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
								</template>
							</el-table-column>
						</el-table>
					</el-tab-pane>
					<el-tab-pane label="功能" name="16">
						<!-- <el-button type="primary" @click="newAdd(5)">新增</el-button> -->
						<el-table :data="tableData" style="width: 100%" 
						row-key="id"
						border
						default-expand-all
						:tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
							<el-table-column prop="parentId" label="项目编号"></el-table-column>
							<el-table-column prop="standard" label="标准房屋" sortable width="180"></el-table-column>
							<el-table-column prop="estimated" label="待估房屋" sortable width="180"></el-table-column>
							<el-table-column prop="coefficient" label="系数"></el-table-column>
							<el-table-column label="操作">
								<template slot-scope="scope">
									<el-button v-if="!scope.row.isParent" type="primary" @click="newChildAdd(scope.row)">新增子节点</el-button>
									<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
									<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
								</template>
							</el-table-column>
						</el-table>
					</el-tab-pane>
					<el-tab-pane label="区位" name="11">
						<!-- <el-button type="primary" @click="newAdd(11)">新增</el-button> -->
						<el-table :data="tableData" style="width: 100%" 
						row-key="id"
						border
						default-expand-all
						:tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
							<el-table-column prop="parentId" label="项目编号"></el-table-column>
							<el-table-column prop="standard" label="标准房屋" sortable width="180"></el-table-column>
							<el-table-column prop="estimated" label="待估房屋" sortable width="180"></el-table-column>
							<el-table-column prop="coefficient" label="系数"></el-table-column>
							<el-table-column label="操作">
								<template slot-scope="scope">
									<el-button v-if="!scope.row.isParent" type="primary" @click="newChildAdd(scope.row)">新增子节点</el-button>
									<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
									<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
								</template>
							</el-table-column>
						</el-table>
					</el-tab-pane>
					<el-tab-pane label="层次" name="12">
						<!-- <el-button type="primary" @click="newAdd(12)">新增</el-button> -->
						<el-table :data="tableData" style="width: 100%" 
						row-key="id"
						border
						default-expand-all
						:tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
							<el-table-column prop="parentId" label="项目编号"></el-table-column>
							<el-table-column prop="standard" label="标准房屋" sortable width="180"></el-table-column>
							<el-table-column prop="estimated" label="待估房屋" sortable width="180"></el-table-column>
							<el-table-column prop="coefficient" label="系数"></el-table-column>
							<el-table-column label="操作">
								<template slot-scope="scope">
									<el-button v-if="!scope.row.isParent" type="primary" @click="newChildAdd(scope.row)">新增子节点</el-button>
									<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
									<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
								</template>
							</el-table-column>
						</el-table>
					</el-tab-pane>
					<el-tab-pane label="朝向" name="13">
						<el-button type="primary" @click="newAdd(13)">新增</el-button>
						<el-table :data="tableData" style="width: 100%" 
						row-key="id"
						border
						default-expand-all
						:tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
							<el-table-column prop="parentId" label="项目编号"></el-table-column>
							<el-table-column prop="standard" label="标准房屋" sortable width="180"></el-table-column>
							<el-table-column prop="estimated" label="待估房屋" sortable width="180"></el-table-column>
							<el-table-column prop="coefficient" label="系数"></el-table-column>
							<el-table-column label="操作">
								<template slot-scope="scope">
									<el-button v-if="!scope.row.isParent" type="primary" @click="newChildAdd(scope.row)">新增子节点</el-button>
									<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
									<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
								</template>
							</el-table-column>
						</el-table>
					</el-tab-pane>
				</el-tabs>
			</template>
		</div>
		<el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
			<el-form label-width="80px" ref="formLabelAlign" :model="formLabelAlign">
				<el-form-item label="标准房屋" prop="standard" v-show="checkFlag"><el-input v-model="formLabelAlign.standard"></el-input></el-form-item>
				<el-form-item label="待估房屋" prop="estimated" v-show="!checkFlag"><el-input v-model="formLabelAlign.estimated"></el-input></el-form-item>
				<el-form-item label="系数" prop="coefficient"><el-input v-model="formLabelAlign.coefficient"></el-input></el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="addCode(formLabelAlign)">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
import { addCode, getAllcodeData } from '@/api/data';
import { getProjectList } from '@/api/project'
export default {
	data() {
		return {
			trial: {},
			search: '',
			tableDataEnd: [],
			currentPage: 1,
			pageSize: 10,
			totalItems: 4,
			filterTableDataEnd: [],
			flag: false,
			trailId: '',
			activeName: '8',
			tableData1: [],
			tableData2: [],
			tableData3: [],
			tableData4: [],
			tableData5: [],
			tableData6: [],
			tableData: [],
			dialogVisible: false,
			formLabelAlign: {
				standard: '',
				estimated: '',
				coefficient: '',
				value: ''
			},
			code: '',
			page: 1,
			projectIdList:[],
			paraCode:'',
			options: [],
			checkFlag: true,
			isChild: true,
			parentId: '',
			isId: true
		};
	},
	mounted() {
		this.initGetData('8');
	},
	methods: {
		// 初始化加载数据字典
		initGetData(para) {
			// let para = '5,9,11,12,13';
			let that = this;
			getAllcodeData(para).then(res => {
				console.log(res.body);
				let resData = res.body;
				resData.forEach((item, index) => {
					// if (item.code == 8) {
					// 	that.assemblyData(item.dictionaries)
					// } else if (item.code == 9) {
					// 	that.assemblyData(item.dictionaries)
					// } else if (item.code == 11) {
					// 	that.assemblyData(item.dictionaries)
					// } else if (item.code == 12) {
					// 	that.assemblyData(item.dictionaries)
					// } else if (item.code == 13) {
					// 	that.assemblyData(item.dictionaries)
					// }
					that.assemblyData(item.dictionaries)
				});
			});
		},
		
		// 组装数据
		assemblyData(data){
			let dataParent = [];	//接收父级标准值
			let dataChild = [];		//接收子级值
			data && data.map( item => {
				if(!item.isParent){
					item.children = [];
					dataParent.push(item)
				}else{
					dataChild.push(item)
				}
			})
			console.log(dataParent)
			console.log(dataChild)
			dataParent && dataParent.forEach( item => {
				dataChild && dataChild.forEach( items => {
					if(item.parentId == items.parentId){
						item.children.push(items)
					}
					
				})
			})
			console.log(dataParent)
			this.tableData = dataParent
		},
		
		// tab切换
		handleClick(tab, event) {
			console.log(tab, event);
			this.initGetData(tab.name);
			this.paraCode = tab.name
		},
		// newAdd(code) {
		// 	console.log(code);
		// 	this.code = code;
		// 	this.dialogVisible = true;
		// 	this.checkFlag = true;
		// 	this.isChild = true;
		// },
		// t添加主节点数据
		addCode(formLabelAlign) {
			console.log(formLabelAlign);
			let para = formLabelAlign;
			para.code = this.code;
			para.parentId = formLabelAlign.value || this.parentId;
			para.isParent = this.isChild;
			this.isId == true ? para.id = '' : para.id = para.id
			this.sendCodeData(para);
		},
		newChildAdd(row){
			console.log(row)
			this.checkFlag = false;
			this.code = row.code;
			this.dialogVisible = true;
			this.isChild = 1;
			this.parentId = row.parentId
			this.isId = true
		},	
		sendCodeData(para) {
			addCode(para).then(res => {
				console.log(res);
				if (res.status == 200) {
					this.$message.success(res.msg);
					this.dialogVisible = false;
					this.$refs.formLabelAlign.resetFields();
					this.initGetData(para.code);
				}
			});
		},
		handleEdit(index, row) {
			console.log(index);
			console.log(row);
			this.code = row.code;
			this.parentId = row.parentId
			this.formLabelAlign = row;
			this.dialogVisible = true;
			this.isChild = row.isParent;
			this.isId = false
			row.isParent == 0 ? (this.checkFlag = true) : this.checkFlag = false
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
