<template>
	<div>
		<h2 style="text-align: center;">登记被征收户</h2>
		<div style="height: 350px;">
			<h3>房屋基本信息</h3>
			<el-form label-width="140px" :model="editForm" ref="editForm">
				<el-form-item label="项目名称:" style="float: left;">
					<el-input auto-complete="off" style="width: 250px;" v-model="editForm.name" disabled></el-input>
				</el-form-item>
				<el-form-item label="报告编号:" style="float: left;">
					<el-input auto-complete="off" style="width: 250px;" v-model="editForm.reportId" disabled></el-input>
				</el-form-item>
				<el-form-item label="丘号:" style="float: left;">
					<el-input auto-complete="off" style="width: 250px;" v-model="editForm.hillNumber" disabled></el-input>
				</el-form-item>
				<el-form-item label="房屋座落:" style="float: left;">
					<el-input auto-complete="off" style="width: 250px;" v-model="editForm.area" disabled></el-input>
				</el-form-item>
				<el-form-item label="房屋所有权人:" style="float: left;">
					<el-input auto-complete="off" style="width: 250px;" v-model="editForm.houseOwner" disabled></el-input>
				</el-form-item>
				<el-form-item label="房屋承租人:" style="float: left;">
					<el-input auto-complete="off" style="width: 250px;" v-model="editForm.houseLessee" disabled></el-input>
				</el-form-item>
				<el-form-item label="房屋所有权证号:" style="float: left;">
					<el-input auto-complete="off" style="width: 250px;" v-model="editForm.certificateNumber" disabled></el-input>
				</el-form-item>
				<el-form-item label="总建筑面积（㎡）:" style="float: left;">
					<el-input auto-complete="off" style="width: 250px;" v-model="editForm.totalBuildingArea" disabled></el-input>
				</el-form-item>
				<el-form-item label="成套与否:" style="float: left;">
					<el-input auto-complete="off" style="width: 250px;" v-model="editForm.isComplete" disabled></el-input>
				</el-form-item>
				<el-form-item label="房屋性质:" style="float: left;">
					<el-input auto-complete="off" style="width: 250px;" v-model="editForm.type" disabled></el-input>
				</el-form-item>
				<el-form-item label="土地使用权证号:" style="float: left;">
					<el-input auto-complete="off" style="width: 250px;" v-model="editForm.landUseWarrantNumber" disabled></el-input>
				</el-form-item>
				<el-form-item label="土地总面积（㎡）:" style="float: left;">
					<el-input auto-complete="off" style="width: 250px;" v-model="editForm.totalLandArea" disabled></el-input>
				</el-form-item>
				<el-form-item label="价值时点:" style="float: left;">
					<el-input auto-complete="off" style="width: 250px;" v-model="editForm.valueTime" disabled></el-input>
				</el-form-item>
				<el-form-item label="*评估员:" style="float: left;">
					<el-input auto-complete="off" style="width: 250px;" v-model="editForm.estateAppraiser" disabled></el-input>
				</el-form-item>
			</el-form>
		</div>
		<div>
			<h3>房屋价格评估</h3>
			<template>
			  <div class="tableDate">
				<div class="table">
				  <el-table
					:data="tableData"
					ref="table"
					tooltip-effect="dark"
					border
					stripe
					style="width: 95%"
					@selection-change='selectRow'>
					<el-table-column label="主体序号"  type="index" width="60" align="center"></el-table-column>
					<el-table-column  label="建筑面积（㎡）" align="center">
					  <template slot-scope="scope">
						  <el-input v-model="scope.row.builtUpArea"  disabled></el-input>
					  </template>
					</el-table-column>
					<el-table-column label="结构等级">
					  <template slot-scope="scope">
						<el-input v-model="scope.row.structuralGrade"  disabled></el-input>
					  </template>
					</el-table-column>
					<el-table-column label="所在层次">
					  <template slot-scope="scope">
						<el-input v-model="scope.row.level"  disabled></el-input>
					  </template>
					</el-table-column>
					<el-table-column prop="name" label="朝向">
					  <template slot-scope="scope">
						<el-input v-model="scope.row.forward"  disabled></el-input>
					  </template>
					</el-table-column>
					<el-table-column label="建筑年代">
					  <template slot-scope="scope">
						<el-input v-model="scope.row.architecturalAge"  disabled></el-input>
					  </template>
					</el-table-column>
					<el-table-column label="标准房屋价格（元/㎡）">
					  <template slot-scope="scope">
						<el-input v-model="scope.row.standardHousePrice"  disabled></el-input>
					  </template>
					</el-table-column>
					<el-table-column label="结构">
					  <template slot-scope="scope">
						<el-input v-model="scope.row.structuralCoefficient"  disabled></el-input>
					  </template>
					</el-table-column>
					<el-table-column label="成新">
					  <template slot-scope="scope">
						<el-input v-model="scope.row.conditionCoefficient"  disabled></el-input>
					  </template>
					</el-table-column>
					<el-table-column label="成套">
					  <template slot-scope="scope">
						<el-input v-model="scope.row.completeCoefficient"  disabled></el-input>
					  </template>
					</el-table-column>
					<el-table-column label="区位">
					  <template slot-scope="scope">
						<el-input v-model="scope.row.areaCoefficient"  disabled></el-input>
					  </template>
					</el-table-column>
					<el-table-column label="层次">
					  <template slot-scope="scope">
						<el-input v-model="scope.row.levelCoefficient"  disabled></el-input>
					  </template>
					</el-table-column>
					<el-table-column label="朝向">
					  <template slot-scope="scope">
						<el-input v-model="scope.row.forwardCoefficient"  disabled></el-input>
					  </template>
					</el-table-column>
					<el-table-column label="修正系数交易情况">
					  <template slot-scope="scope">
						<el-input v-model="scope.row.tradingCoefficient"  disabled></el-input>
					  </template>
					</el-table-column>
					<el-table-column label="单价">
					  <template slot-scope="scope">
						<el-input v-model="scope.row.unitPrice"  disabled></el-input>
					  </template>
					</el-table-column>
					<el-table-column label="折扣率">
					  <template slot-scope="scope">
						<el-input v-model="scope.row.discountRate"  disabled></el-input>
					  </template>
					</el-table-column>
					<el-table-column label="总价">
					  <template slot-scope="scope">
						<el-input v-model="scope.row.totalPrice"  disabled></el-input>
					  </template>
					</el-table-column>
				  </el-table>
				</div>
			  </div>
			</template>
		</div>
		<div>
			<h3>主体总价评估</h3>
			<template>
				<div class="table">
				  <el-table
					:data="totalPriceEvaluation"
					ref="table"
					tooltip-effect="dark"
					border
					stripe
					style="width: 95%"
					@selection-change='selectRow'>
					<el-table-column  label="房屋评估总价（元）" align="center">
					  <template slot-scope="scope">
						  <el-input v-model="scope.row.houseAssessTotalPrice" disabled></el-input>
					  </template>
					</el-table-column>
					<el-table-column label="土地面积（㎡）">
					  <template slot-scope="scope">
						<el-input v-model="scope.row.landArea" disabled></el-input>
					  </template>
					</el-table-column>
					<el-table-column label="土地价格（元/㎡">
					  <template slot-scope="scope">
						<el-input v-model="scope.row.landPrice" disabled></el-input>
					  </template>
					</el-table-column>
					<el-table-column prop="name" label="土地总价（元">
					  <template slot-scope="scope">
						<el-input v-model="scope.row.landTotalPrice" disabled></el-input>
					  </template>
					</el-table-column>
					<el-table-column label="补偿金额总计（元）">
					  <template slot-scope="scope">
						<el-input v-model="scope.row.compensationAmountMoney" disabled></el-input>
					  </template>
					</el-table-column>
					<el-table-column label="产权补偿金额（元）">
					  <template slot-scope="scope">
						<el-input v-model="scope.row.propertyRightCompensation" disabled></el-input>
					  </template>
					</el-table-column>
					<el-table-column label="承租人补偿金额（元）">
					  <template slot-scope="scope">
						<el-input v-model="scope.row.lesseeCompensationMoney" disabled></el-input>
					  </template>
					</el-table-column>
					<el-table-column label="备注">
					  <template slot-scope="scope">
						<el-input v-model="scope.row.remark" disabled></el-input>
					  </template>
					</el-table-column>
				  </el-table>
				</div>
			</template>
		</div>
		<div>
			<h3>房屋装修评估</h3>
			<template>
				<div>
					<el-table
						:data="tableDataDecorate"
						ref="table"
						tooltip-effect="dark"
						border
						stripe
						style="width: 95%"
						@selection-change='selectRow'>
						<el-table-column  label="产权人补偿款（元）" align="center">
						  <template slot-scope="scope">
							  <el-input v-model="scope.row.propertyOwnerCompensation" disabled></el-input>
						  </template>
						</el-table-column>
						<el-table-column  label="承租人补偿款（元）" align="center">
						  <template slot-scope="scope">
							  <el-input v-model="scope.row.lesseeOwnerCompensation" disabled></el-input>
						  </template>
						</el-table-column>
						<el-table-column  label="装饰装修等级或类别" align="center">
						  <template slot-scope="scope">
							  <el-input v-model="scope.row.levelOrCategory" disabled></el-input>
						  </template>
						</el-table-column>
						<el-table-column  label="室内装饰装修综合成新" align="center">
						  <template slot-scope="scope">
							  <el-input v-model="scope.row.renovationCondition" disabled></el-input>
						  </template>
						</el-table-column>
						<el-table-column  label="装饰装修工程费单价（元/㎡）" align="center">
						  <template slot-scope="scope">
							  <el-input v-model="scope.row.unitPrice" disabled></el-input>
						  </template>
						</el-table-column>
						<el-table-column  label="室内装饰装修补偿单价（元/㎡）" align="center">
						  <template slot-scope="scope">
							  <el-input v-model="scope.row.compensationUnitPrice" disabled></el-input>
						  </template>
						</el-table-column>
						<el-table-column  label="室内装饰装修评估补偿金额合计（元）" align="center">
						  <template slot-scope="scope">
							  <el-input v-model="scope.row.totalCompensation" disabled></el-input>
						  </template>
						</el-table-column>
						<el-table-column  label="附属物补偿金额合计（元）" align="center">
						  <template slot-scope="scope">
							  <el-input v-model="scope.row.appendageCompensation" disabled></el-input>
						  </template>
						</el-table-column>
						<el-table-column  label="各单项装饰装修调整项目差价总金额折合单价（元/㎡）" align="center">
						  <template slot-scope="scope">
							  <el-input v-model="scope.row.extraUnitPrice" disabled></el-input>
						  </template>
						</el-table-column>
					</el-table>
				</div>
			</template>
		</div>
		<div>
			<!-- <h3>评审意见</h3>
			<textarea style="width: 800px;height: 100px;resize: none;margin-left: 20px;"></textarea> -->
			<el-form :model="commandData" style="margin-left: 20px;margin-top: 20px;">
				<el-form-item label="评审意见">
					<el-input type="textarea" v-model="commandData.command" style="width: 800px;height: 100px;margin-left: 20px;"></el-input>
				</el-form-item>
			</el-form>
		</div>
		<div style="text-align: center;margin: 20px 0;">
			<el-button @click="trialBy">终审通过</el-button>
			<el-button @click="trialRefused">拒绝</el-button>
		</div>
	</div>
	
</template>

<script>
import { searchHouseholdList, postTrailList } from '@/api/project'
export default {
  data() {
		return {
			collectData: {},
			trialDataList: [],
			checkData: '',
			page: '',
			editForm: {},
			totalPriceEvaluation: [],
			tableDataDecorate: [],
			tableData: [],
      selectlistRow: [],
			id: "",
			commandData:{
				command: ''
			}
	}
  },
  created() {
		const content = this.$route.query.content
		this.collectData = content
		this.id = content.id
		console.log(content);
  },
	mounted() {
		this.getTrialInfoData()
	},
  methods: {
			getTrialInfoData () {
				let para = this.id
				searchHouseholdList(para).then((res) => {
					// this.total = res.total;
					console.log(res)
					this.editForm = res.body;
					this.tableData = res.body.householdWorthAssesses
					this.totalPriceEvaluation.push({
						compensationAmountMoney:res.body.compensationAmountMoney,
						houseAssessTotalPrice:res.body.houseAssessTotalPrice,
						landArea: res.body.landArea,
						landPrice: res.body.landPrice,
						landTotalPrice: res.body.landTotalPrice,
						lesseeCompensationMoney: res.body.lesseeCompensationMoney,
						propertyRightCompensation: res.body.propertyRightCompensation,
						remark: res.body.remark
					})
					this.tableDataDecorate.push(res.body.householdRenovationAssess)
				})
			},
			
      // 获取表格选中时的数据
      selectRow (val) {
        this.selectlistRow = val
      },
			
			// 初审通过
			trialBy () {
				let para = this.id;
				let cmd = this.commandData.command;
				let act = '1';
				let reviewLevel = 2;
				console.log(para);
				postTrailList(para,cmd,act,reviewLevel).then((res) => {
					console.log(res);
					if(res.status == 200 ){
						this.$message.success('终审通过！')
						this.$router.push({
							path: '/project/trial'
						})
					}else{
						this.$message.error(res.msg)
					}
				})
			},
			
			trialRefused () {
				let para = this.id;
				let cmd = this.commandData.command;
				let act = '0';
				let reviewLevel = 2;
				console.log(para);
				postTrailList(para,cmd,act,reviewLevel).then((res) => {
					console.log(res);
				})
			}
    }
}
</script>

<style lang="scss" scoped="scoped">
	h3{
		text-indent: 20px;
	}
</style>
