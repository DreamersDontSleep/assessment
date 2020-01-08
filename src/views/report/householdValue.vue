<template>
	<div>
		<div id="print">
			<h1>南京市国有土地上住宅房屋征收补偿金额分户估计表</h1>
			<table style="border: 1px solid #ccc;" class="houseTable">
				<tr>
					<td>项目名称：</td>
					<td colspan="10">{{datas.name}}</td>
					<td>报告编号：</td>
					<td colspan="3">{{datas.assessment}}</td>
				</tr>
				<tr>
					<td>房屋坐落</td>
					<td colspan="5">{{datas.area}}</td>
					<td colspan="3">产权人</td>
					<td colspan="3">{{datas.houseOwner}}</td>
					<td>承租人</td>
					<td colspan="2">{{datas.houseLessee}}</td>
				</tr>
				<tr>
					<td rowspan="2">权证编号</td>
					<td>房屋</td>
					<td colspan="4">{{datas.certificateNumber}}</td>
					<td colspan="3">房屋总建筑面积（m2）</td>
					<td colspan="3">{{datas.totalBuildingArea}}</td>
					<td>价值时点</td>
					<td colspan="2">{{datas.valueTime}}</td>
				</tr>
				<tr>
					<td>土地</td>
					<td colspan="4">{{datas.landUseWarrantNumber}}</td>
					<td colspan="3">土地总面积（m2）</td>
					<td colspan="3">{{datas.totalLandArea}}</td>
					<td>成套与否</td>
					<td colspan="2">{{datas.isComplete}}</td>
				</tr>
				<tr>
					<td rowspan="2">房号</td>
					<td rowspan="2">建筑面积（m2）</td>
					<td rowspan="2">结构等级</td>
					<td rowspan="2">所在层次</td>
					<td rowspan="2">朝向</td>
					<td rowspan="2">标准房屋价格（元/m2）</td>
					<td colspan="6">调整系数</td>
					<td>修正系数</td>
					<td colspan="2">评估价值</td>
				</tr>
				<tr>
					<td>结构</td>
					<td>成新</td>
					<td>成套</td>
					<td>区位</td>
					<td>层次</td>
					<td>朝向</td>
					<td>交易情况</td>
					<td>单价（元/m2）</td>
					<td>总价（元）</td>
				</tr>
				<tr>
					<td>{{datas.assessment}}</td>
					<td>{{datas.builtUpArea}}</td>
					<td>{{datas.structuralGrade}}</td>
					<td>{{datas.level}}</td>
					<td>{{datas.forward}}</td>
					<td>{{datas.standardHousePrice}}</td>
					<td>{{datas.structuralCoefficient}}</td>
					<td>{{datas.conditionCoefficient}}</td>
					<td>{{datas.completeCoefficient}}</td>
					<td>{{datas.areaCoefficient}}</td>
					<td>{{datas.levelCoefficient}}</td>
					<td>{{datas.forwardCoefficient}}</td>
					<td>{{datas.tradingCoefficient}}</td>
					<td>{{datas.priceC}}</td>
					<td>{{datas.totalPrice}}</td>
				</tr>
				<tr>
					<td rowspan="2">房屋评估总价（元）</td>
					<td colspan="4">地大于房</td>
					<td colspan="2" rowspan="2">最低总额保障补差</td>
					<td colspan="2" rowspan="2">赔偿金额合计</td>
					<td colspan="2" rowspan="2">产权人补偿金额</td>
					<td colspan="2" rowspan="2">承租人补偿金额</td>
					<td colspan="2" rowspan="3">备注</td>
				</tr>
				<tr>
					<td>面积（m2）</td>
					<td>单价</td>
					<td colspan="2">总价</td>
				</tr>
				<tr>
					<td>{{datas.houseAssessTotalPrice}}</td>
					<td>{{datas.landArea}}</td>
					<td>{{datas.landPrice}}</td>
					<td colspan="2">{{datas.landTotalPrice}}</td>
					<td colspan="2">{{datas.assessment}}</td>
					<td colspan="2">{{datas.compensationAmountMoney}}</td>
					<td colspan="2">{{datas.propertyRightCompensation}}</td>
					<td colspan="2">{{datas.lesseeCompensationMoneyu}}</td>
				</tr>
				<tr>
					<td colspan="15" style="text-align: left;">
						<p>备注：</p>
						<p>1、本次估计目的：为房屋征收部门与被征收人确定被征收房屋价值的补偿提供依据，评估被征收房屋的价值；</p>
						<p>2、本次评估价值标准：评估对象在正常交易情况下，由熟悉情况的交易双方以公平交易方式在价值时点资源进行交易的金额，但不考虑租赁、抵押、查封等因素的影响；</p>
						<p>3、本次评估结果包含房屋及其占用范围内的国有土地使用权价值，不包含房屋室内装饰装修的补偿及印征收房屋造成的搬迁、临时安置的补偿和停产停业损失的补偿等；</p>
						<p>4、本次评估法规政策依据为《国有土地上房屋征收与补偿条例》(中华人民共和国国务院第590号)、《江苏省贯彻实施<国有土地上房屋征收与补偿条例>若干问题的规定》(苏政发[2011]91号)和《南京市国有土地上房屋征收与补偿办法》；</p>
						<p>5、本次评估技术规范依据为《房地产估计规范》(GB/T50291-2015)、《南京市国有土地上房屋征收评估技术导则》(宁建征字[2017]74号)；</p>
						<p>6、被征收人活房屋征收部门对评估结果又异议的，自收到评估报告之日起10日内，向原评估机构书窗申请复核评估。申请复核评估的，应当书窗提出评估报告存在的问题。</p>
					</td>
				</tr>
			</table>
		</div>
		<el-button v-print="'#print'">打印</el-button>
	</div>
</template>

<script>
	export default{
		data () {
			return {
				datas: ''
			}
		},
		created () {
			const content = this.$route.query.content
			this.datas = content
			console.log(content)
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.houseTable{
		tr{
			height: 40px !important;
			td{
				border-right: 1px solid #ccc !important;
				border-bottom: 1px solid #ccc !important;
				text-align: center;
			}
		}
	}
</style>
