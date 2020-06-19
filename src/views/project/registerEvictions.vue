<template>
	<div>
		<h2>{{collectData.name}} - 登记被征收户</h2>
		<div style="height: 350px;">
			<h3>房屋基本信息</h3>
			<el-form label-width="140px" :model="editForm" ref="editForm">
				<el-form-item label="项目名称:" style="float: left;">
					<el-input auto-complete="off" style="width: 250px;" v-model="editForm.name" disabled></el-input>
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
					<!-- <el-input auto-complete="off" style="width: 250px;" v-model="editForm.isComplete"></el-input> -->
					<template>
						<el-select v-model="editForm.isComplete" style="width: 250px;" placeholder="请选择">
							<el-option v-for="(item,index) in fieldOptionC" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</template>
				</el-form-item>
				<el-form-item label="房屋性质:" style="float: left;">
					<!-- <el-input auto-complete="off" style="width: 250px;" v-model="editForm.type"></el-input> -->
					<template>
						<el-select v-model="editForm.type" style="width: 250px;" placeholder="请选择">
							<el-option v-for="(item,index) in fieldOption" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</template>
				</el-form-item>
				<el-form-item label="土地使用权证号:" style="float: left;">
					<el-input auto-complete="off" style="width: 250px;" v-model="editForm.landUseWarrantNumber"></el-input>
				</el-form-item>
				<el-form-item label="土地总面积（㎡）:" style="float: left;">
					<el-input auto-complete="off" style="width: 250px;" v-model="editForm.totalLandArea"></el-input>
				</el-form-item>
				<el-form-item label="价值时点:" style="float: left;">
					<!-- <el-input auto-complete="off" style="width: 250px;" v-model="editForm.valueTime"></el-input> -->
					<el-date-picker
					      v-model="editForm.valueTime"
					      type="date"
					      placeholder="选择日期">
					    </el-date-picker>
				</el-form-item>
				<el-form-item label="*评估员:" style="float: left;">
					<!-- <el-input auto-complete="off" style="width: 250px;" v-model="editForm.estateAppraiser"></el-input> -->
					<template>
						<el-select v-model="editForm.estateAppraiser" style="width: 250px;" placeholder="请选择">
							<el-option v-for="(item,index) in estateOption" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</template>
				</el-form-item>
			</el-form>
		</div>
		<div>
			<h3>房屋价格评估</h3>
			<template>
				<div class="tableDate">
					<div class="button" style="height: 80px;">
						<P style="float: left;">主体增加<el-button class="el-icon-plus" @click.prevent="addRow()"></el-button>
						</P>
						<p style="float: left;">主体删除<el-button class="el-icon-minus" @click.prevent="delData()"></el-button>
						</p>
					</div>
					<div class="table" style="position: relative;">
						<el-table type="selection" :data="tableData" border ref="table" tooltip-effect="dark" stripe style="width: 1500px;"
						 @selection-change='selectRow'>
							<el-table-column type="selection" width="45" align="center"></el-table-column>
							<el-table-column label="主体序号" type="index" width="60" align="center"></el-table-column>
							<el-table-column label="建筑面积（㎡）" header-align="center" align="center">
								<template slot-scope="scope">
									<el-input v-model="scope.row.builtUpArea" v-on:blur="changeData(scope.$index,scope.row)"></el-input>
								</template>
							</el-table-column>
							<el-table-column label="结构等级" header-align="center" align="center">
								<template slot-scope="scope">
									<!-- <el-input v-model="scope.row.structuralGrade"></el-input> -->
									<el-select v-model="scope.row.structuralGrade" placeholder="请选择">
										<el-option v-for="(item,index) in structuralGradeOption" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</template>
							</el-table-column>
							<el-table-column label="所在层次" header-align="center" align="center">
								<template slot-scope="scope">
									<!-- <el-input v-model="scope.row.level"></el-input> -->
									<el-select v-model="scope.row.level" placeholder="请选择">
										<el-option v-for="(item,index) in levelOption" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</template>
							</el-table-column>
							<el-table-column label="朝向" header-align="center" align="center">
								<template slot-scope="scope">
									<!-- <el-input v-model="scope.row.forward"></el-input> -->
									<el-select v-model="scope.row.forward" placeholder="请选择">
										<el-option v-for="(item,index) in forwardOption" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</template>
							</el-table-column>
							<el-table-column label="建筑年代" header-align="center" align="center">
								<template slot-scope="scope">
									<el-input v-model="scope.row.architecturalAge"></el-input>
								</template>
							</el-table-column>
							<el-table-column label="标准房屋价格（元/㎡）" header-align="center" align="center">
								<template slot-scope="scope">
									<el-input v-model="scope.row.standardHousePrice" v-on:blur="changeData(scope.$index,scope.row)"></el-input>
								</template>
							</el-table-column>
							<el-table-column label="调整系数/标准系数" header-align="center" align="center">
								<el-table-column label="结构" header-align="center" align="center">
									<template slot-scope="scope">
										<el-input v-model="structureDictionary" disabled></el-input>
										<el-input v-model="scope.row.structuralCoefficient" v-on:blur="changeData(scope.$index,scope.row)"></el-input>
										<!-- <el-input v-enter-number type="number" v-model="scope.row.structuralCoefficient" ></el-input> -->
									</template>
								</el-table-column>
								<el-table-column label="成新" header-align="center" align="center">
									<template slot-scope="scope">
										<el-input v-model="newDictionary" disabled></el-input>
										<el-input v-model="scope.row.conditionCoefficient" v-on:blur="changeData(scope.$index,scope.row)"></el-input>
									</template>
								</el-table-column>
								<el-table-column label="成套" header-align="center" align="center">
									<template slot-scope="scope">
										<el-input v-model="completeDictionary" disabled></el-input>
										<el-input v-model="scope.row.completeCoefficient" v-on:blur="changeData(scope.$index,scope.row)"></el-input>
									</template>
								</el-table-column>
								<el-table-column label="区位" header-align="center" align="center">
									<template slot-scope="scope">
										<el-input v-model="areaDictionary" disabled></el-input>
										<el-input v-model="scope.row.areaCoefficient" v-on:blur="changeData(scope.$index,scope.row)"></el-input>
									</template>
								</el-table-column>
								<el-table-column label="层次" header-align="center" align="center">
									<template slot-scope="scope">
										<el-input v-model="levelDictionary" disabled></el-input>
										<el-input v-model="scope.row.levelCoefficient" v-on:blur="changeData(scope.$index,scope.row)"></el-input>
									</template>
								</el-table-column>
								<el-table-column label="朝向" header-align="center" align="center">
									<template slot-scope="scope">
										<el-input v-model="forwardDictionary" disabled></el-input>
										<el-input v-model="scope.row.forwardCoefficient" v-on:blur="changeData(scope.$index,scope.row)"></el-input>
									</template>
								</el-table-column>
							</el-table-column>
							<el-table-column label="修正系数交易情况" header-align="center" align="center">
								<template slot-scope="scope">
									<el-input v-model="scope.row.tradingCoefficient" v-on:blur="changeData(scope.$index,scope.row)"></el-input>
								</template>
							</el-table-column>
							<el-table-column label="评估价值" header-align="center" align="center">
								<el-table-column label="单价" header-align="center" align="center" style="position: relative;">
									<template slot-scope="scope">
										<el-input v-model="scope.row.priceC"></el-input>
									</template>
								</el-table-column>
								<el-table-column label="折扣率" header-align="center" align="center">
									<template slot-scope="scope">
										<el-input v-model="scope.row.discountRate" v-on:blur="changeData(scope.$index,scope.row)"></el-input>
									</template>
								</el-table-column>
								<el-table-column label="总价" header-align="center" align="center">
									<template slot-scope="scope">
										<el-input v-model="scope.row.totalPrice"></el-input>
									</template>
								</el-table-column>
							</el-table-column>
						</el-table>
						<p ref="acp" style="position: absolute;right: 110px;top: 160px;z-index: 999;display: none;">公式：</p>
					</div>
				</div>
			</template>
		</div>
		<div class="price-check">
			<h3>主体总价评估</h3>
			<template>
				<div>
					<el-form :model="editForm" label-width="160px" ref="editForm">
						<el-form-item label="房屋评估总价（元）" prop="houseAssessTotalPrice" class="fl" style="width: 12.5%;float: left;">
							<el-input v-model="editForm.houseAssessTotalPrice" auto-complete="off" class="edit-input" style="width: 140px;display: block;"></el-input>
						</el-form-item>
						<el-form-item label="土地面积（㎡）" prop="landArea" class="fl" style="width: 12.5%;float: left;">
							<el-input v-model="editForm.landArea" auto-complete="off" class="edit-input" style="width: 140px"></el-input>
						</el-form-item>
						<el-form-item label="土地价格（元/㎡）" prop="landPrice" class="fl" style="width: 12.5%;float: left;">
							<el-input v-model="editForm.landPrice" auto-complete="off" class="edit-input" style="width: 140px"></el-input>
						</el-form-item>
						<el-form-item label="土地总价（元" prop="landTotalPrice" class="fl" style="width: 12.5%;float: left;">
							<el-input v-model="editForm.landTotalPrice" auto-complete="off" class="edit-input" style="width: 140px"></el-input>
						</el-form-item>
						<el-form-item label="补偿金额总计（元）" prop="compensationAmountMoney" class="fl" style="width: 12.5%;float: left;">
							<el-input v-model="editForm.compensationAmountMoney" auto-complete="off" class="edit-input" style="width: 140px"></el-input>
						</el-form-item>
						<el-form-item label="产权补偿金额（元）" prop="propertyRightCompensation" class="fl" style="width: 12.5%;float: left;">
							<el-input v-model="editForm.propertyRightCompensation" auto-complete="off" class="edit-input" style="width: 140px"></el-input>
						</el-form-item>
						<el-form-item label="承租人补偿金额（元）" prop="lesseeCompensationMoney" class="fl" style="width: 12.5%;float: left;">
							<el-input v-model="editForm.lesseeCompensationMoney" auto-complete="off" class="edit-input" style="width: 140px"></el-input>
						</el-form-item>
						<el-form-item label="备注" prop="remark" class="fl" style="width: 12.5%;float: left;">
							<el-input v-model="editForm.remark" auto-complete="off" class="edit-input" style="width: 140px"></el-input>
						</el-form-item>
					</el-form>
				</div>
			</template>
		</div>
		<div>
			<h3>备注</h3>
			<div>
				<ul style="list-style: none;height: 240px;border: 1px solid rgba(217, 217, 217, 1);color: rgba(0, 0, 0, 0.647058823529412);padding-top: 30px;">
					<li>1、本次估价目的：为房屋征收部门与被征收人确定被征收房屋价值的补偿提供依据，评估被征收房屋的价值；</li>
					<li>2、本次评估价值标准：评估对象在正常交易情况下，由熟悉情况的交易双方以公平交易方式在价值时点自愿进行交易的金额，但不考虑租赁、抵押、查封等因素的影响；</li>
					<li>3、本次评估结果包含房屋及其占用范围内的国有土地使用权价值，不包含房屋室内装饰装修的补偿及因征收房屋造成的搬迁、临时安置的补偿和停产停业损失的补偿等；</li>
					<li>4、本次评估法规政策依据为《国有土地房屋征收与补偿条例》（中华人民共和国国务院第590号）、《江苏省贯彻实施<国有土地上房屋征收与补偿条例>若干问题的规定》（苏政发[2011]91号）和《南京市国有土地上房屋征收与补偿办法》；</li>
					<li>5、本次评估技术规范依据为《房地产估价规范》（GB/T50291—2015）、《南京市国有土地上房屋征收评估技术导则》（宁建征字[2017]74号）；</li>
					<li>6、被征收人或房屋征收部门对评估结果有异议的，自收到评估报告之日起10日内，向原评估机构书面申请复核评估。申请复核评估的，应当书面提出评估报告存在的问题；</li>
				</ul>
			</div>
		</div>
		<div>
			<el-button @click="saveDatas">保存</el-button>
			<router-link :to="{ path: '/project/collectList', query: { 'content': this.collectData }}">
				<el-button>返回</el-button>
			</router-link>
		</div>
	</div>

</template>

<script>
	import {
		register
	} from '@/api/project'
	import { addCode, getAllcodeData } from '@/api/data';
	export default {
		data() {
			return {
				collectData: {},
				Regname: {
					name: ''
				},
				id: "",
				editForm: {},
				registerData: {
					"expropriationHousehold": {
						"hillNumber": "165306-I-",
						"houseOwner": "",
						"totalLandArea": "",
						"area": "",
						"name": "",
						"reportId": "",
						"houseLessee": "",
						"certificateNumber": "",
						"isComplete": "",
						"type": "",
						"landUseWarrantNumber": "",
						"totalBuildingArea": "",
						"valueTime": "",
						"reviewStatus": "",
						"estateAppraiser": "",
						"houseAssessTotalPrice": "",
						"landArea": "",
						"landPrice": "",
						"landTotalPrice": "",
						"compensationAmountMoney": "",
						"propertyRightCompensation": "",
						"lesseeCompensationMoney": "",
						"remark": "",
						"creator": "",
						"creatorName": ""
					},
					"householdWorthAssesses": [{
						"architecturalAge": "",
						"areaCoefficient": "",
						"builtUpArea": "",
						"completeCoefficient": "",
						"conditionCoefficient": "",
						"discountRate": "",
						"level": "",
						"levelCoefficient": "",
						"standardHousePrice": "",
						"structuralCoefficient": "",
						"structuralGrade": "",
						"totalPrice": "",
						"tradingCoefficient": "",
						"unitPrice": "",
						"priceC": "",
						"forwardCoefficient": ""
					}]
				},
				fieldOption: [{
					"label": "公房",
					"value": "公房"
				}, {
					"label": "私房",
					"value": "私房"
				}],
				fieldOptionC: [{
					"label": "是",
					"value": "1"
				}, {
					"label": "否",
					"value": "0"
				}],
				estateOption: [{
					"label": "aa",
					"value": "aa"
				}, {
					"label": "bb",
					"value": "cc"
				}],
				structuralGradeOption: [{
					"label": "aa",
					"value": "aa"
				}],
				levelOption: [{
					"label": "1/5",
					"value": "1/5"
				}, {
					"label": "2/5",
					"value": "2/5"
				}, {
					"label": "3/5",
					"value": "3/5"
				}, {
					"label": "4/5",
					"value": "4/5"
				}, {
					"label": "5/5",
					"value": "5/5"
				}],
				forwardOption: [{
					"label": "朝东",
					"value": "朝东"
				}, {
					"label": "朝南",
					"value": "朝南"
				}, {
					"label": "朝西",
					"value": "朝西"
				}, {
					"label": "朝北",
					"value": "朝北"
				}],
				structureDictionary: 11,
				newDictionary: 11,
				completeDictionary: 11,
				areaDictionary: 11,
				levelDictionary: 11,
				forwardDictionary: 11,
				totalPriceEvaluation: [],
				obj: {},
				tableData: [],
				selectlistRow: []
			}
		},
		created() {
			const content = this.$route.query.contents
			this.collectData = content
			this.Regname.name = this.collectData.name
			this.editForm = this.registerData.expropriationHousehold
			this.editForm.name = this.collectData.name
			this.tableData = this.registerData.householdWorthAssesses
			this.id = content.id
			console.log(content);
			this.getBaseData();
		},
		methods: {
			// 获取表格选中时的数据
			selectRow(val) {
				this.selectlistRow = val
			},
			// 获取基础系数
			getBaseData(){
				let para = '8,9,11,12,13,16';
				let that = this;
				getAllcodeData(para).then(res => {
					console.log(res.body);
					let resData = res.body;
					resData.forEach((item, index) => {
						if (item.code == 8) {
							item.dictionaries.length > 0 && item.dictionaries.map( (items,indexs) => {
								if(items.isParent == 0 && items.parentId == that.id){
									that.structureDictionary = items.coefficient
								}
							})
						} else if (item.code == 9) {
							item.dictionaries.length > 0 && item.dictionaries.map( (items,indexs) => {
								if(items.isParent == 0 && items.parentId == that.id){
									that.newDictionary = items.coefficient
								}
							})
						} else if (item.code == 11) {
							item.dictionaries.length > 0 && item.dictionaries.map( (items,indexs) => {
								if(items.isParent == 0 && items.parentId == that.id){
									that.areaDictionary = items.coefficient
								}
							})
						} else if (item.code == 12) {
							item.dictionaries.length > 0 && item.dictionaries.map( (items,indexs) => {
								if(items.isParent == 0 && items.parentId == that.id){
									that.levelDictionary = items.coefficient
								}
							})
						} else if (item.code == 13) {
							item.dictionaries.length > 0 && item.dictionaries.map( (items,indexs) => {
								if(items.isParent == 0 && items.parentId == that.id){
									that.forwardDictionary = items.coefficient
								}
							})
						} else if (item.code == 16) {
							item.dictionaries.length > 0 && item.dictionaries.map( (items,indexs) => {
								if(items.isParent == 0 && items.parentId == that.id){
									that.completeDictionary = items.coefficient
								}
							})
						}
						// this.activeName = this.paraCode
					});
				});
			},
			// 增加行
			addRow() {
				console.log(1)
				var list = {
					architecturalAge: this.architecturalAge,
					areaCoefficient: this.areaCoefficient,
					builtUpArea: this.builtUpArea,
					completeCoefficient: this.completeCoefficient,
					conditionCoefficient: this.conditionCoefficient,
					discountRate: this.discountRate,
					level: this.level,
					standardHousePrice: this.standardHousePrice,
					structuralCoefficient: this.structuralCoefficient,
					structuralGrade: this.structuralGrade,
					levelCoefficient: this.levelCoefficient,
					tradingCoefficient: this.tradingCoefficient,
					unitPrice: this.unitPrice,
					totalPrice: this.totalPrice
				}
				this.tableData.push(list)
			},
			// 删除方法
			// 删除选中行
			delData() {
				for (let i = 0; i < this.selectlistRow.length; i++) {
					let val = this.selectlistRow
					// 获取选中行的索引的方法
					// 遍历表格中tableData数据和选中的val数据，比较它们的rowNum,相等则输出选中行的索引
					// rowNum的作用主要是为了让每一行有一个唯一的数据，方便比较，可以根据个人的开发需求从后台传入特定的数据
					val.forEach((val, index) => {
						this.tableData.forEach((v, i) => {
							if (val.rowNum === v.rowNum) {
								// i 为选中的索引
								this.tableData.splice(i, 1)
							}
						})
					})
				}
				// 删除完数据之后清除勾选框
				// this.$refs.tableData.clearSelection()
			},

			changeData(index, row) {
				console.log(row);
				let priceJg = row.structuralCoefficient == "" ? this.structureDictionary : row.structuralCoefficient
				let priceCx = row.conditionCoefficient == "" ? this.newDictionary : row.conditionCoefficient
				let priceCt = row.completeCoefficient == "" ? this.completeDictionary : row.completeCoefficient
				let priceQw = row.areaCoefficient == "" ? this.areaDictionary : row.areaCoefficient
				let priceCc = row.levelCoefficient == "" ? this.levelDictionary : row.levelCoefficient
				let priceCx2 = row.forwardCoefficient == "" ? this.forwardDictionary : row.forwardCoefficient
				
				let areaJz = row.builtUpArea == "" ? 0 : row.builtUpArea //建筑面积
				let priceFw = row.standardHousePrice == "" ? 0 : row.standardHousePrice //单价
				let changeXs = row.tradingCoefficient == "" ? 1 : row.tradingCoefficient //修正系数
				// let changePrice = row.priceC
				let discount = row.discountRate == "" ? 1 : row.discountRate
				
				row.priceC = priceFw *
					priceJg / this.structureDictionary *
					priceCx / this.newDictionary *
					priceCt / this.completeDictionary *
					priceQw / this.areaDictionary *
					priceCc / this.levelDictionary *
					priceCx2 / this.forwardDictionary * changeXs;
					
				row.totalPrice = row.priceC * areaJz * discount
			},
			mouseOver() {
				alert(1)
			},
			saveDatas() {
				let para = this.registerData;
				let paraId = this.id;
				register(paraId, para).then((res) => {
					console.log(res);
					if(res.status === 200){
						this.$message({
							message: '保存成功',
							type: 'success'
						});
						this.$router.push({
							path: '/project/collectList',
							query: {
								'content': this.collectData
							}
						})
					}else{
						this.$message.error(res.msg)
					}
				})
			}

		}
	}
</script>

<style>
	.price-check .el-form-item__label {
		float: none;
	}

	.price-check .el-form-item__content {
		margin-left: 0 !important;
	}
</style>
