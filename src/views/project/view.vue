<template>
	<div>
		<h2>{{projectData.name}} - 登记被征收户</h2>
		<div style="height: 350px;">
			<h3>房屋基本信息</h3>
			<el-form label-width="140px" :model="editForm" ref="editForm">
				<el-form-item label="项目名称:" style="float: left;">
					<el-input auto-complete="off" style="width: 250px;" v-model="projectData.name" disabled></el-input>
				</el-form-item>
				<el-form-item label="报告编号:" style="float: left;">
					<el-input auto-complete="off" style="width: 250px;" v-model="editForm.reportId" disabled></el-input>
				</el-form-item>
				<el-form-item label="丘号:" style="float: left;">
					<el-input auto-complete="off" style="width: 250px;" v-model="editForm.hillNumber " disabled></el-input>
				</el-form-item>
				<el-form-item label="房屋座落:" style="float: left;">
					<el-input auto-complete="off" style="width: 250px;" v-model="editForm.area" disabled></el-input>
				</el-form-item>
				<el-form-item label="房屋所有权人:" style="float: left;">
					<el-input auto-complete="off" style="width: 250px;" v-model="editForm.houseOwner " disabled></el-input>
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
					<template>
						<el-select v-model="editForm.isComplete" style="width: 250px;" placeholder="请选择" disabled>
							<el-option v-for="(item,index) in fieldOptionC" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</template>
					<!-- <el-input auto-complete="off" style="width: 250px;" v-model="editForm.isComplete"></el-input> -->
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
					<el-date-picker
					      v-model="editForm.valueTime"
					      type="date"
					      placeholder="选择日期" disabled>
					    </el-date-picker>
					<!-- <el-input auto-complete="off" style="width: 250px;" v-model="editForm.valueTime"></el-input> -->
				</el-form-item>
				<el-form-item label="*评估员:" style="float: left;">
					<template>
						<el-select v-model="editForm.estateAppraiser" style="width: 250px;" placeholder="请选择" disabled>
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
					<div class="table">
						<el-table :data="tableData" ref="table" tooltip-effect="dark" border stripe style="width: 95%" @selection-change='selectRow'>
							<el-table-column label="主体序号" type="index" width="60" align="center"></el-table-column>
							<el-table-column label="建筑面积（㎡）" align="center">
								<template slot-scope="scope">
									<el-input v-model="scope.row.builtUpArea" disabled></el-input>
								</template>
							</el-table-column>
							<el-table-column label="结构等级">
								<template slot-scope="scope">
									<el-input v-model="scope.row.structuralGrade" disabled></el-input>
								</template>
							</el-table-column>
							<el-table-column label="所在层次">
								<template slot-scope="scope">
									<el-input v-model="scope.row.level" disabled></el-input>
								</template>
							</el-table-column>
							<el-table-column label="朝向">
								<template slot-scope="scope">
									<el-input v-model="scope.row.forward" disabled></el-input>
								</template>
							</el-table-column>
							<el-table-column label="建筑年代">
								<template slot-scope="scope">
									<el-input v-model="scope.row.architecturalAge" disabled></el-input>
								</template>
							</el-table-column>
							<el-table-column label="标准房屋价格（元/㎡）">
								<template slot-scope="scope">
									<el-input v-model="scope.row.standardHousePrice" disabled></el-input>
								</template>
							</el-table-column>
							<el-table-column label="调整系数/标准系数-结构">
								<template slot-scope="scope">
									<el-input v-model="scope.row.structuralCoefficient" disabled></el-input>
								</template>
							</el-table-column>
							<el-table-column label="调整系数/标准系数-成新">
								<template slot-scope="scope">
									<el-input v-model="scope.row.conditionCoefficient" disabled></el-input>
								</template>
							</el-table-column>
							<el-table-column label="调整系数/标准系数-成套">
								<template slot-scope="scope">
									<el-input v-model="scope.row.completeCoefficient" disabled></el-input>
								</template>
							</el-table-column>
							<el-table-column label="调整系数/标准系数-区位">
								<template slot-scope="scope">
									<el-input v-model="scope.row.areaCoefficient" disabled></el-input>
								</template>
							</el-table-column>
							<el-table-column label="调整系数/标准系数-层次">
								<template slot-scope="scope">
									<el-input v-model="scope.row.levelCoefficient" disabled></el-input>
								</template>
							</el-table-column>
							<el-table-column label="修正系数交易情况">
								<template slot-scope="scope">
									<el-input v-model="scope.row.tradingCoefficient" disabled></el-input>
								</template>
							</el-table-column>
							<el-table-column label="评估价值-单价">
								<template slot-scope="scope">
									<el-input v-model="scope.row.unitPrice" disabled></el-input>
								</template>
							</el-table-column>
							<el-table-column label="评估价值-折扣率">
								<template slot-scope="scope">
									<el-input v-model="scope.row.discountRate" disabled></el-input>
								</template>
							</el-table-column>
							<el-table-column label="评估价值-总价">
								<template slot-scope="scope">
									<el-input v-model="scope.row.totalPrice" disabled></el-input>
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
					<el-table :data="totalPriceEvaluation" ref="table" tooltip-effect="dark" border stripe style="width: 95%"
					 @selection-change='selectRow'>
						<el-table-column label="房屋评估总价（元）" align="center">
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
					<el-table :data="decorateData" ref="table" tooltip-effect="dark" border stripe style="width: 95%"
					 @selection-change='selectRow'>
						<el-table-column label="产权人补偿款（元）" align="center">
							<template slot-scope="scope">
								<el-input v-model="scope.row.propertyOwnerCompensation" disabled></el-input>
							</template>
						</el-table-column>
						<el-table-column label="承租人补偿款（元）" align="center">
							<template slot-scope="scope">
								<el-input v-model="scope.row.lesseeOwnerCompensation" disabled></el-input>
							</template>
						</el-table-column>
						<el-table-column label="装饰装修等级或类别" align="center">
							<template slot-scope="scope">
								<el-input v-model="scope.row.levelOrCategory" disabled></el-input>
							</template>
						</el-table-column>
						<el-table-column label="室内装饰装修综合成新" align="center">
							<template slot-scope="scope">
								<el-input v-model="scope.row.renovationCondition" disabled></el-input>
							</template>
						</el-table-column>
						<el-table-column label="装饰装修工程费单价（元/㎡）" align="center">
							<template slot-scope="scope">
								<el-input v-model="scope.row.unitPrice" disabled></el-input>
							</template>
						</el-table-column>
						<el-table-column label="室内装饰装修补偿单价（元/㎡）" align="center">
							<template slot-scope="scope">
								<el-input v-model="scope.row.compensationUnitPrice" disabled></el-input>
							</template>
						</el-table-column>
						<el-table-column label="室内装饰装修评估补偿金额合计（元）" align="center">
							<template slot-scope="scope">
								<el-input v-model="scope.row.totalCompensation" disabled></el-input>
							</template>
						</el-table-column>
						<el-table-column label="附属物补偿金额合计（元）" align="center">
							<template slot-scope="scope">
								<el-input v-model="scope.row.appendageCompensation" disabled></el-input>
							</template>
						</el-table-column>
						<el-table-column label="各单项装饰装修调整项目差价总金额折合单价（元/㎡）" align="center">
							<template slot-scope="scope">
								<el-input v-model="scope.row.extraUnitPrice" disabled></el-input>
							</template>
						</el-table-column>
					</el-table>
				</div>
			</template>
		</div>
<!-- 		<div>
			<h3>上传资料</h3>
			<el-form>
				<el-form-item label="委托合同" class="fl">
					<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
					 accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx" multiple :limit="3" :on-exceed="handleExceed"
					 :file-list="fileList">

					</el-upload>
				</el-form-item>
				<el-form-item label="公证书" class="fl">
					<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
					 accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx" multiple :limit="3" :on-exceed="handleExceed"
					 :file-list="fileList">

					</el-upload>
				</el-form-item>
				<el-form-item label="征收决定" class="fl">
					<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
					 accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx" multiple :limit="3" :on-exceed="handleExceed"
					 :file-list="fileList">
					</el-upload>
				</el-form-item>
				<el-form-item label="项目批文" class="fl">
					<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
					 accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx" multiple :limit="3" :on-exceed="handleExceed"
					 :file-list="fileList">
					</el-upload>
				</el-form-item>
				<el-form-item label="产权情况表" class="fl">
					<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
					 accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx" multiple :limit="3" :on-exceed="handleExceed"
					 :file-list="fileList">
					</el-upload>
				</el-form-item>
				<el-form-item label="丘号图" class="fl">
					<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
					 accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx" multiple :limit="3" :on-exceed="handleExceed"
					 :file-list="fileList">
					</el-upload>
				</el-form-item>
				<el-form-item label="红线图" class="fl">
					<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
					 accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx" multiple :limit="3" :on-exceed="handleExceed"
					 :file-list="fileList">
					</el-upload>
				</el-form-item>
				<el-form-item label="地图勘测成果报告及图纸" class="fl">
					<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
					 accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx" multiple :limit="3" :on-exceed="handleExceed"
					 :file-list="fileList">
					</el-upload>
				</el-form-item>
				<el-form-item label="价格测算过程" class="fl">
					<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
					 accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx" multiple :limit="3" :on-exceed="handleExceed"
					 :file-list="fileList">
					</el-upload>
				</el-form-item>
				<el-form-item label="现场勘查通知照片" class="fl">
					<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
					 accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx" multiple :limit="3" :on-exceed="handleExceed"
					 :file-list="fileList">
					</el-upload>
				</el-form-item>
				<el-form-item label="公示照片" class="fl">
					<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
					 accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx" multiple :limit="3" :on-exceed="handleExceed"
					 :file-list="fileList">
					</el-upload>
				</el-form-item>
				<el-form-item label="现场办公照片" class="fl">
					<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
					 accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx" multiple :limit="3" :on-exceed="handleExceed"
					 :file-list="fileList">
					</el-upload>
				</el-form-item>
				<el-form-item label="整体评估报告" class="fl">
					<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
					 accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx" multiple :limit="3" :on-exceed="handleExceed"
					 :file-list="fileList">
					</el-upload>
				</el-form-item>
			</el-form>
		</div> -->
		<div>
			<h3>审批记录</h3>
			<el-table :data="checkList" style="width: 100%;">
				<el-table-column label="审批时间" prop="checkTime">
				</el-table-column>
				<el-table-column label="审批人" prop="checkName">
				</el-table-column>
				<el-table-column label="下个节点" prop="nextNode">
				</el-table-column>
				<el-table-column label="审批结果" prop="checkResult">
				</el-table-column>
				<el-table-column label="备注" prop="notes">
				</el-table-column>
			</el-table>
		</div>
		<div>
			<router-link :to="{ path: '/project/collectList', query: { 'content': this.returnData }}">
				<el-button>确定</el-button>
			</router-link>
			<router-link :to="{ path: '/project/collectList', query: { 'content': this.returnData }}">
				<el-button>返回</el-button>
			</router-link>
		</div>
	</div>

</template>

<script>
	import {
		searchHouseholdList, getDecorateList
	} from '@/api/project'
	export default {
		data() {
			return {
				collectData: {},
				returnData: {},
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
				editForm: {},
				id: '',
				fileList: [{
					name: 'food.jpeg',
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
				}, {
					name: 'food2.jpeg',
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
				}],
				tableData: [{
					rowNum: 1,
					coveredArea: 1,
					levelStructure: 2,
					whereLevel: 3,
					toward: 1,
					buildAge: 1,
					standardHousePrice: 1,
					structureCoefficient: 100,
					asNewCoefficient: 100,
					completeSetOfCoefficient: 100,
					locationCoefficient: 100,
					levelCoefficient: 100,
					coefficient: 1,
					towardCoefficient: 100,
					correctionCoefficient: 1,
					unitPrice: 1,
					discountRate: 1,
					totalPrice: 1
				}],
				estateOption: [{
					"label": "aa",
					"value": "aa"
				}, {
					"label": "bb",
					"value": "cc"
				}],
				fieldOptionC: [{
					"label": "是",
					"value": 1
				}, {
					"label": "否",
					"value": 0
				}],
				selectlistRow: [],
				decorateData: [],
				checkList: [{
					checkTime: "2019-0101",
					checkName: "aa",
					nextNode: "bb",
					checkResult: "初审通过",
					notes: "ss"
				}, {
					checkTime: "2019-0101",
					checkName: "aa",
					nextNode: "bb",
					checkResult: "终审通过",
					notes: "ss"
				}],
				projectData: {}
			}
		},
		created() {
			const content = this.$route.query.contents
			const conNames = this.$route.query.conName
			this.collectData = content
			this.returnData = conNames
			this.id = content.id
			this.projectData = conNames
			console.log(this.$route.query);
		},
		mounted() {
			this.getHouseList(this.id)
			this.getDecorateData(this.id)
		},
		methods: {
			getHouseList(id) {
				let para = id;
				searchHouseholdList(para).then((res) => {
					console.log(res.body);
					this.editForm = res.body
					this.editForm.name = this.collectData.name
					this.tableData = res.body.householdWorthAssesses
					// this.decorateData.push(res.body.householdRenovationAssess);
					this.totalPriceEvaluation[0].houseAssessTotalPrice = res.body.houseAssessTotalPrice
					this.totalPriceEvaluation[0].landArea = res.body.landArea
					this.totalPriceEvaluation[0].landPrice = res.body.landPrice
					this.totalPriceEvaluation[0].landTotalPrice = res.body.landTotalPrice
					this.totalPriceEvaluation[0].compensationAmountMoney = res.body.compensationAmountMoney
					this.totalPriceEvaluation[0].propertyRightCompensation = res.body.propertyRightCompensation
					this.totalPriceEvaluation[0].lesseeCompensationMoney = res.body.lesseeCompensationMoney
					this.totalPriceEvaluation[0].remark = res.body.remark
					// console.log(this.decorateData);
				})
			},
			getDecorateData (id) {
					let para = id;
					getDecorateList(para).then((res) => {
						console.log(res);
						if(res.body){
							this.decorateData.push(res.body)
						}else{
							this.decorateData = [{
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
			},
			// 获取表格选中时的数据
			selectRow(val) {
				this.selectlistRow = val
			},
			// handleRemove(file, fileList) {
			// 	console.log(file, fileList);
			// },
			handlePreview(file) {
				console.log(file);
			},
			handleExceed(files, fileList) {
				this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
			},
			// beforeRemove(file, fileList) {
			// 	return this.$confirm(`确定移除 ${ file.name }？`);
			// },
			// 增加行
			addRow() {
				var list = {
					rowNum: '',
					coveredArea: this.coveredArea,
					levelStructure: this.levelStructure,
					whereLevel: this.whereLevel,
					toward: this.toward,
					buildAge: this.buildAge,
					standardHousePrice: this.standardHousePrice,
					structureCoefficient: this.structureCoefficient,
					asNewCoefficient: this.asNewCoefficient,
					completeSetOfCoefficient: this.completeSetOfCoefficient,
					locationCoefficient: this.locationCoefficient,
					levelCoefficient: this.levelCoefficient,
					towardCoefficient: this.towardCoefficient,
					correctionCoefficient: this.correctionCoefficient,
					unitPrice: this.unitPrice,
					discountRate: this.discountRate,
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
			}
		}
	}
</script>

<style>
</style>
