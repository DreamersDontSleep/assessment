<template>
	<div>
		<el-table
			:data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
			ref="table"
			tooltip-effect="dark"
			border
			stripe
			style="width: 100%">
			<el-table-column type="index" label="序号" width="60">
			</el-table-column>
			<el-table-column prop="projectId" label="项目编号">
			</el-table-column>
			<el-table-column prop="projectName" label="项目名称">
			</el-table-column>
			<el-table-column prop="valueTime" label="评估时点" sortable>
			</el-table-column>
			<el-table-column prop="creatorName" label="登记人" sortable>
			</el-table-column>
			<el-table-column prop="type" label="房屋类型" sortable>
			</el-table-column>
			<el-table-column prop="totalHouseholds" label="总户数" sortable>
			</el-table-column>
			<el-table-column prop="notReviewHouseholds" label="未审核数" sortable>
			</el-table-column>
			<el-table-column prop="completeReviewHouseholds" label="提交审核数" sortable>
			</el-table-column>
			<el-table-column prop="reviewHouseholds" label="终审数" sortable>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<router-link :to="{ path: '/project/finalList', query: { 'content': scope.row }}" style="color: rgb(51, 153, 204)">
						<el-button size="small">拆迁户终审</el-button>
					</router-link>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination
		  @size-change="handleSizeChange"
		  @current-change="handleCurrentChange"
		  :current-page="currentPage"
		  :page-sizes="[10, 20, 30, 40]"
		  :page-size="pageSize"
		  layout="total, sizes, prev, pager, next, jumper"
		  :total="tableData.length">
		</el-pagination>
	</div>
</template>

<script>
import { getFinalList } from '@/api/project'
export default {
	data() {
		return {
			tableData: [],
			search: '',
			tableDataEnd: [],
			currentPage: 1,
			pageSize: 10,
			totalItems: 4,
			filterTableDataEnd:[],
			flag:false
		}
	},
	mounted() {
		this.fetchFinalList()
	},
	methods: {
		fetchFinalList() {
			getFinalList().then((res) => {
				console.log(res);
				this.tableData = res.body;
			})
		},
		handleSizeChange(val) {
		  console.log(`每页 ${val} 条`);
		  this.pageSize = val;
		},
		handleCurrentChange(val) {
		  console.log(`当前页: ${val}`);
		  this.currentPage = val;
		}  
	}
}
</script>

<style lang="scss" scoped>

</style>

