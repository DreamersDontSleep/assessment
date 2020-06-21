<template>
	<div>
		<h1>南京市国有土地房屋征收评估补偿金额分户汇总表</h1>
		<h2>（分户初步估价结果表）</h2>
		<el-form :inline="true">
			<el-form-item label="项目名称:">
				{{this.titleForm.name}}
			</el-form-item>
			<el-form-item label="委托单位:">
				{{this.titleForm.valuationPrincipal}}
			</el-form-item>
			<el-form-item label="房屋征收决定公告:">
				{{this.titleForm.notice}}
			</el-form-item>
		</el-form>
		<el-form :inline="true" :model="editForm" ref="editForm">
			<el-form-item label="房屋性质:">
				<template>
					<el-select v-model="editForm.type" style="width: 250px;" placeholder="请选择">
						<el-option
							v-for="(item,index) in fieldOption"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				</template>
			</el-form-item>
			<el-form-item label="产权人:">
				<el-input v-model="editForm.PropertyRightPerson"></el-input>
			</el-form-item>
			<el-form-item label="承租人:">
				<el-input v-model="editForm.TheLessee"></el-input>
			</el-form-item>
			<el-form-item label="是否已审核:">
				<template>
					<el-select v-model="editForm.check" style="width: 250px;" placeholder="请选择">
						<el-option
							v-for="(item,index) in checkOr"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				</template>
			</el-form-item>
			<el-form-item>
				<el-button @click="searchTable(editForm)">搜索</el-button>
			</el-form-item>
		</el-form>
		<div>
			<!-- <router-link :to="{ path: '/report/evaluationPublic'}">
				<el-button type="primary">打印初步评估公示</el-button>
			</router-link>
			<router-link :to="{ path: '/report/householdValue'}">
				<el-button type="primary">打印分户估价表</el-button>
			</router-link>
			<router-link :to="{ path: '/report/decorateValue'}">
				<el-button type="primary">打印装修估价表</el-button>
			</router-link>
			<router-link :to="{ path: '/report/HouseholdReport'}">
				<el-button type="primary">打印分户估价报告</el-button>
			</router-link> -->
		</div>
		<div>
			<template>
				<div class="table">
				  <el-table
					:data="totalPriceEvaluation"
					ref="table"
					tooltip-effect="dark"
					border
					stripe
					style="width: 95%">
					<el-table-column type="selection" width="45" align="center"></el-table-column>
					<el-table-column label="主体序号"  type="index" width="60" align="center"></el-table-column>
					<el-table-column  label="房屋坐落" align="center">
					  <template slot-scope="scope">
						  <!-- <el-input v-model="scope.row.totalPriceHousingAppraisal"></el-input> -->
						  {{scope.row.area}}
					  </template>
					</el-table-column>
					<el-table-column label="产权人">
					  <template slot-scope="scope">
						<!-- <el-input v-model="scope.row.landArea"></el-input> -->
						{{scope.row.houseOwner}}
					  </template>
					</el-table-column>
					<el-table-column label="承租人">
					  <template slot-scope="scope">
						<!-- <el-input v-model="scope.row.landPrice"></el-input> -->
						{{scope.row.houseLessee}}
					  </template>
					</el-table-column>
					<el-table-column label="权证性质">
					  <template slot-scope="scope">
						<!-- <el-input v-model="scope.row.landTotalPrice"></el-input> -->
						{{scope.row.landTotalPrice}}
					  </template>
					</el-table-column>
					<el-table-column label="分户建筑面积（㎡）">
					  <template slot-scope="scope">
						<!-- <el-input v-model="scope.row.totalAmountCompensation"></el-input> -->
						{{scope.row.totalBuildingArea}}
					  </template>
					</el-table-column>
					<el-table-column label="土地面积（㎡）">
					  <template slot-scope="scope">
						<!-- <el-input v-model="scope.row.amountEquityCompensation"></el-input> -->
						{{scope.row.totalLandArea}}
					  </template>
					</el-table-column>
					<el-table-column label="地大于房土地面积（㎡）">
					  <template slot-scope="scope">
						<!-- <el-input v-model="scope.row.amountTenantCompensation"></el-input> -->
						{{scope.row.landArea}}
					  </template>
					</el-table-column>
					<el-table-column label="所在层数/总层数">
					  <template slot-scope="scope">
						 <!-- <el-input v-model="scope.row.notes"></el-input> -->
						{{scope.row.level}}
					  </template>
					</el-table-column>
					<el-table-column label="评估单价（元/㎡）">
					  <template slot-scope="scope">
						 <!-- <el-input v-model="scope.row.notes"></el-input> -->
						{{scope.row.standardHousePrice}}
					  </template>
					</el-table-column>
					<el-table-column label="土地评估单价（元/平方米）">
					  <template slot-scope="scope">
						<!-- <el-input v-model="scope.row.notes"></el-input> -->
						{{scope.row.priceC}}
					  </template>
					</el-table-column>
					<el-table-column label="评估总价（元）">
					  <template slot-scope="scope">
						<!-- <el-input v-model="scope.row.notes"></el-input> -->
						{{scope.row.totalPrice}}
					  </template>
					</el-table-column>
					<el-table-column label="地大于房部分评估总价（元）">
					  <template slot-scope="scope">
						<!-- <el-input v-model="scope.row.notes"></el-input> -->
						{{scope.row.houseAssessTotalPrice}}
					  </template>
					</el-table-column>
					<el-table-column label="补偿金额合计（元）">
					  <template slot-scope="scope">
						<!-- <el-input v-model="scope.row.notes"></el-input> -->
						{{scope.row.compensationAmountMoney}}
					  </template>
					</el-table-column>
					<el-table-column label="产权人补偿款（元）">
					  <template slot-scope="scope">
						<!-- <el-input v-model="scope.row.notes"></el-input> -->
						{{scope.row.propertyRightCompensation}}
					  </template>
					</el-table-column>
					<el-table-column label="承租人补偿款（元）">
					  <template slot-scope="scope">
						<!-- <el-input v-model="scope.row.notes"></el-input> -->
						{{scope.row.lesseeCompensationMoney}}
					  </template>
					</el-table-column>
					<el-table-column label="是否已审核">
					  <template slot-scope="scope">
						<!-- <el-input v-model="scope.row.notes"></el-input> -->
						{{scope.row.notes}}
					  </template>
					</el-table-column>
					<el-table-column label="备注">
					  <template slot-scope="scope">
						<!-- <el-input v-model="scope.row.notes"></el-input> -->
						{{scope.row.remark}}
					  </template>
					</el-table-column>
					<el-table-column label="分户估价表">
					  <template slot-scope="scope">
						<router-link :to="{ path: '/report/householdValue', query: { 'content': scope.row }}" style="color: rgb(51, 153, 204)">
						  查看
						</router-link>
					  </template>
					</el-table-column>
					<el-table-column label="装修估价表">
					  <template slot-scope="scope">
						<router-link :to="{ path: '/report/decorateValue', query: { 'content': scope.row }}" style="color: rgb(51, 153, 204)">
						  查看
						</router-link>
					  </template>
					</el-table-column>
					<el-table-column label="分户评估报告">
					  <template slot-scope="scope">
						<router-link :to="{ path: '/report/householdReport', query: { 'content': scope.row }}" style="color: rgb(51, 153, 204)">
						  查看
						</router-link>
					  </template>
					</el-table-column>
				  </el-table>
				</div>
			</template>
		</div>
	</div>
</template>

<script>
export default {
  data() {
		return {
			editForm:{
				type: '',
				PropertyRightPerson:'',
				TheLessee: '',
				check: ''
			},
			titleForm:{},
			fieldOption:[{
				"label": "aa",
				"value": "aa"
			},{
				"label": "bb",
				"value": "cc"
			}],
			checkOr:[{
					"label": "是",
					"value": "是"
				},{
					"label": "否",
					"value": "否"
			}],
			totalPriceEvaluation: [{
				totalPriceHousingAppraisal: '安安',
				landArea: '啊',
				landPrice: '吧',
				landTotalPrice: '吧',
				totalAmountCompensation: '拒绝',
				amountEquityCompensation: '哈哈',
				amountTenantCompensation: '那你',
				notes: '111'
			}]
	  }
  },
	created () {
		const content = this.$route.query.content
		this.titleForm = content
		console.log(content)
		let newArr = [];
		content.expropriationHouseholds.forEach((item,key) => {
			item.householdWorthAssesses.forEach((items,index) => {
				newArr.push({
					area: item.area,
					houseOwner: item.houseOwner,
					houseLessee: item.houseLessee,
					totalBuildingArea: item.totalBuildingArea,
					totalLandArea: item.totalLandArea,
					landArea: item.landArea,
					level: items.level,
					standardHousePrice: items.standardHousePrice,
					priceC: items.priceC,
					totalPrice: items.totalPrice,
					houseAssessTotalPrice: item.houseAssessTotalPrice,
					compensationAmountMoney: item.compensationAmountMoney,
					propertyRightCompensation: item.propertyRightCompensation,
					lesseeCompensationMoney: item.lesseeCompensationMoney,
					remark: item.remark,
					name: content.name,
					assessment: content.assessment,
					certificateNumber: item.certificateNumber,
					landUseWarrantNumber: item.landUseWarrantNumber,
					valueTime: item.valueTime,
					isComplete: item.isComplete,
					forward: items.forward,
					areaCoefficient: items.areaCoefficient,
					completeCoefficient: items.completeCoefficient,
					conditionCoefficient: items.conditionCoefficient,
					forwardCoefficient: items.forwardCoefficient,
					levelCoefficient: items.levelCoefficient,
					structuralCoefficient: items.structuralCoefficient,
					tradingCoefficient: items.tradingCoefficient,
					builtUpArea: items.builtUpArea,
					structuralGrade: items.structuralGrade
				})
			})
		})
		this.totalPriceEvaluation = newArr
	},
	methods:{
		searchTable(editForm){
			this.$refs.editForm.validate((valid) => {
			  if (valid) {
					alert('submit!');
					console.log(editForm);
			  } else {
				console.log('error submit!!');
					return false;
			  }
			});
		}
	}
}
</script>

<style>
</style>
