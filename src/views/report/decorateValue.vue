<template>
	<div>
		<h1>南京市国有土地上住宅房屋征收室内装饰装修补偿金额分户结果表</h1>
		<table style="border: 1px solid #ccc;" class="houseTable">
			<tr>
				<td>房屋坐落</td>
				<td colspan="3">{{data.area}}</td>
				<td>产权人</td>
				<td>{{data.houseOwner}}</td>
				<td>承租人</td>
				<td>{{data.houseLessee}}</td>
			</tr>
			<tr>
				<td>使用性质</td>
				<td></td>
				<td>建筑面积</td>
				<td>{{data.builtUpArea}}</td>
				<td>丘号</td>
				<td></td>
				<td>房屋结构</td>
				<td></td>
			</tr>
			<tr>
				<td>权证编号</td>
				<td colspan="2">{{data.landUseWarrantNumber}}</td>
				<td colspan="2">征收区位级别</td>
				<td></td>
				<td>所在层/总层数</td>
				<td></td>
			</tr>
			<tr>
				<td>装饰装修等级或类别</td>
				<td colspan="2">装饰装修工程费单价</td>
				<td colspan="2">各单项装饰装修调整项目差价总金额折合单价</td>
				<td colspan="2">室内装饰装修综合成新</td>
				<td>室内装饰装修补偿单价</td>
			</tr>
			<tr>
				<td>{{data.levelOrCategory}}</td>
				<td colspan="2">{{data.unitPrice}}</td>
				<td colspan="2">{{data.extraUnitPrice}}</td>
				<td colspan="2">{{data.renovationCondition}}</td>
				<td>{{data.compensationUnitPrice}}</td>
			</tr>
			<tr>
				<td>室内装饰装修评估补偿金额合计</td>
				<td colspan="2">附属物补偿金额合计</td>
				<td colspan="2">产权人补偿款</td>
				<td colspan="2">承租人补偿款</td>
				<td>备注</td>
			</tr>
			<tr>
				<td>{{data.totalCompensation}}</td>
				<td colspan="2">{{data.appendageCompensation}}</td>
				<td colspan="2">{{data.propertyOwnerCompensation}}</td>
				<td colspan="2">{{data.lesseeOwnerCompensation}}</td>
				<td>{{data.remark}}</td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				data: ''
			}
		},
		created (){
			const content = this.$route.query.content
			this.data = content
			console.log(content)
		},
		methods: {
			
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
			}
		}
	}
</style>
