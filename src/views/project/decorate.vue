<template>
	<div>
		<h2>{{projectData.name}} - 登记被征收户</h2>
		<div style="height: 350px;">
			<h3>房屋基本信息</h3>
			<template>
				<el-form label-width="140px" :model="editForm" ref="editForm">
					<el-form-item label="项目名称:" style="float: left;">
						<el-input auto-complete="off" style="width: 250px;" v-model="projectData.name" disabled></el-input>
					</el-form-item>
					<el-form-item label="报告编号:" style="float: left;">
						<el-input auto-complete="off" style="width: 250px;" v-model="editForm.reportId"></el-input>
					</el-form-item>
					<el-form-item label="丘号:" style="float: left;">
						<el-input auto-complete="off" style="width: 250px;" v-model="editForm.hillNumber "></el-input>
					</el-form-item>
					<el-form-item label="房屋座落:" style="float: left;">
						<el-input auto-complete="off" style="width: 250px;" v-model="editForm.area"></el-input>
					</el-form-item>
					<el-form-item label="房屋所有权人:" style="float: left;">
						<el-input auto-complete="off" style="width: 250px;" v-model="editForm.houseOwner "></el-input>
					</el-form-item>
					<el-form-item label="房屋承租人:" style="float: left;">
						<el-input auto-complete="off" style="width: 250px;" v-model="editForm.houseLessee"></el-input>
					</el-form-item>
					<el-form-item label="房屋所有权证号:" style="float: left;">
						<el-input auto-complete="off" style="width: 250px;" v-model="editForm.certificateNumber"></el-input>
					</el-form-item>
					<el-form-item label="总建筑面积（㎡）:" style="float: left;">
						<el-input auto-complete="off" style="width: 250px;" v-model="editForm.totalBuildingArea"></el-input>
					</el-form-item>
					<el-form-item label="成套与否:" style="float: left;">
						<el-input auto-complete="off" style="width: 250px;" v-model="editForm.isComplete"></el-input>
					</el-form-item>
					<el-form-item label="房屋性质:" style="float: left;">
						<el-input auto-complete="off" style="width: 250px;" v-model="editForm.type"></el-input>
					</el-form-item>
					<el-form-item label="土地使用权证号:" style="float: left;">
						<el-input auto-complete="off" style="width: 250px;" v-model="editForm.landUseWarrantNumber"></el-input>
					</el-form-item>
					<el-form-item label="土地总面积（㎡）:" style="float: left;">
						<el-input auto-complete="off" style="width: 250px;" v-model="editForm.totalLandArea"></el-input>
					</el-form-item>
					<el-form-item label="价值时点:" style="float: left;">
						<el-input auto-complete="off" style="width: 250px;" v-model="editForm.valueTime"></el-input>
					</el-form-item>
					<el-form-item label="*评估员:" style="float: left;">
						<el-input auto-complete="off" style="width: 250px;" v-model="editForm.estateAppraiser"></el-input>
					</el-form-item>
				</el-form>
			</template>
		</div>
		<div>
			<h3>房屋装修评估</h3>
			<template>
				<div>
					<el-table
						:data="tableData"
						ref="table"
						tooltip-effect="dark"
						border
						stripe
						style="width: 95%"
						@selection-change='selectRow'>
						<el-table-column  label="产权人补偿款（元）" align="center">
						  <template slot-scope="scope">
							  <el-input v-model="scope.row.propertyOwnerCompensation"></el-input>
						  </template>
						</el-table-column>
						<el-table-column  label="承租人补偿款（元）" align="center">
						  <template slot-scope="scope">
							  <el-input v-model="scope.row.lesseeOwnerCompensation"></el-input>
						  </template>
						</el-table-column>
						<el-table-column  label="装饰装修等级或类别" align="center">
						  <template slot-scope="scope">
							  <el-input v-model="scope.row.levelOrCategory"></el-input>
						  </template>
						</el-table-column>
						<el-table-column  label="室内装饰装修综合成新" align="center">
						  <template slot-scope="scope">
							  <el-input v-model="scope.row.renovationCondition"></el-input>
						  </template>
						</el-table-column>
						<el-table-column  label="装饰装修工程费单价（元/㎡）" align="center">
						  <template slot-scope="scope">
							  <el-input v-model="scope.row.unitPrice"></el-input>
						  </template>
						</el-table-column>
						<el-table-column  label="室内装饰装修补偿单价（元/㎡）" align="center">
						  <template slot-scope="scope">
							  <el-input v-model="scope.row.compensationUnitPrice"></el-input>
						  </template>
						</el-table-column>
						<el-table-column  label="室内装饰装修评估补偿金额合计（元）" align="center">
						  <template slot-scope="scope">
							  <el-input v-model="scope.row.totalCompensation"></el-input>
						  </template>
						</el-table-column>
						<el-table-column  label="附属物补偿金额合计（元）" align="center">
						  <template slot-scope="scope">
							  <el-input v-model="scope.row.appendageCompensation"></el-input>
						  </template>
						</el-table-column>
						<el-table-column  label="各单项装饰装修调整项目差价总金额折合单价（元/㎡）" align="center">
						  <template slot-scope="scope">
							  <el-input v-model="scope.row.extraUnitPrice"></el-input>
						  </template>
						</el-table-column>
					</el-table>
				</div>
			</template>
		</div>
		<div>
			<el-button @click="saveData2">保存</el-button>
			<el-button>提交</el-button>
			<el-button>返回</el-button>
		</div>
	</div>
	
</template>

<script>
import { getDecorateList, searchHouseholdList, saveDecorate } from '@/api/project' 
export default {
  data() {
	return {
	  collectData: {},
	  editForm:{},
	  fieldOption:[{
	  	"label": "aa",
	  	"value": "aa"
	  },{
	  	"label": "bb",
	  	"value": "cc"
	  }],
	  id: '',
	  totalPriceEvaluation: [{
	  	houseAssessTotalPrice: '',
	  	landArea: '',
	  	landPrice: '',
	  	landTotalPrice: '',
	  	compensationAmountMoney: '',
	  	propertyRightCompensation: '',
	  	lesseeCompensationMoney: '',
	  	remark: ''
	  }],
	  tableData: [],
      selectlistRow: [],
	  projectData: {}
	}
  },
  created() {
	const content = this.$route.query.contents
	const conNames = this.$route.query.conName
	this.collectData = content
	this.editForm.name = this.collectData.name
	this.id = content.id
	this.projectData = conNames
	console.log(conNames);
  },
  mounted () {
	this.getDecorateData(this.id)
  },
  methods: {
	  getDecorateData (id) {
		let para = id;
		getDecorateList(para).then((res) => {
			// this.colletList = res.body
			console.log(res);
			if(res.body){
				this.tableData.push(res.body)
			}else{
				this.tableData = [{
					propertyOwnerCompensation: "",
					lesseeOwnerCompensation: "",
					levelOrCategory: "",
					renovationCondition: "",
					unitPrice: "",
					compensationUnitPrice: "",
					totalCompensation: "",
					appendageCompensation: "",
					extraUnitPrice: ""
				}]
			}
			
		});
		searchHouseholdList(para).then((res) => {
			this.editForm = res.body
		}) 
	  },
      // 获取表格选中时的数据
      selectRow (val) {
        this.selectlistRow = val
      },
	  
	  // 保存数据
	  saveData2 () {
		  let paraId = this.id;
		  let para = this.tableData[0];
		  // console.log(this.tableData[0]);
		  saveDecorate(paraId,para).then((res) => {
		  	// this.editForm = res.body
		  	console.log(res);
			console.log(this.projectData)
			if(res.status === 200){
				this.$router.push({
					path: '/project/collectList',
					query: {
						'content': this.projectData
					}
				})
			}
		  }) 
	  }
    }
}
</script>

<style>
</style>
