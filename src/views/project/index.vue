<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true">
				<el-form-item>
					<el-input placeholder="请输入搜索内容"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary">搜索</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="handleAdd">新建项目</el-button>
				</el-form-item>
			</el-form>
		</el-col>
		<!--列表-->
		<el-table :data="projectList" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
			<el-table-column type="index" label="序号" width="60">
				
			</el-table-column>
			<el-table-column prop="id" label="项目编号">
				<template slot-scope="scope">
					{{ scope.row.id }}
				</template>
			</el-table-column>
			<el-table-column prop="name" label="项目名称" sortable>
				<template slot-scope="scope">
					{{ scope.row.name }}
				</template>
			</el-table-column>
			<el-table-column prop="completePrice" label="成套基准单价" sortable>
				<template slot-scope="scope">
					{{ scope.row.completePrice }}
				</template>
			</el-table-column>
			<el-table-column prop="notCompletePrice" label="非成套基准单价" sortable>
				<template slot-scope="scope">
					{{ scope.row.notCompletePrice }}
				</template>
			</el-table-column>
			<el-table-column prop="overPrice" label="地大于房单价" sortable>
				<template slot-scope="scope">
					{{ scope.row.overPrice }}
				</template>
			</el-table-column>
			<!-- <el-table-column prop="creatorName" label="登记人" sortable>
				<template slot-scope="scope">
					{{ scope.row.creatorName }}
				</template>
			</el-table-column> -->
			<el-table-column prop="type" label="房屋类型" sortable>
				<template slot-scope="scope">
					{{ scope.row.type }}
				</template>
			</el-table-column>
			<el-table-column prop="totalHouseholds" label="总户数" sortable>
				<template slot-scope="scope">
					{{ scope.row.totalHouseholds }}
				</template>
			</el-table-column>
			<el-table-column prop="notReviewHouseholds" label="未审核数" sortable>
				<template slot-scope="scope">
					{{ scope.row.notReviewHouseholds }}
				</template>
			</el-table-column>
			<el-table-column prop="reviewHouseholds" label="提交审核数" sortable>
				<template slot-scope="scope">
					{{ scope.row.reviewHouseholds }}
				</template>
			</el-table-column>
			<el-table-column prop="completeReviewHouseholds" label="终审数" sortable>
				<template slot-scope="scope">
					{{ scope.row.completeReviewHouseholds }}
				</template>
			</el-table-column>
			<el-table-column prop="remark" label="备注" sortable>
				<template slot-scope="scope">
					{{ scope.row.remark }}
				</template>
			</el-table-column>
			<el-table-column label="操作" width="150">
				<template slot-scope="scope">
					<span class="handleBtn" style="color: #1890FF;cursor: pointer;" @click="handleLook(scope.$index, scope.row)">查看</span>
					<span class="handleBtn" style="color: #1890FF;cursor: pointer;" @click="handleEdit(scope.$index, scope.row)">编辑</span>
					<span class="handleBtn" style="color: #1890FF;cursor: pointer;" @click="handleUpload(scope.$index, scope.row)">上传资料</span>
					<span class="handleBtn" style="color: #1890FF;cursor: pointer;" @click="handleDel(scope.$index, scope.row)">删除</span>
				</template>
			</el-table-column>
		</el-table>
		<!--工具条-->
		<el-col :span="24" class="toolbar">
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="10" :total="total" style="float:right;">
			</el-pagination>
		</el-col>
		<!--编辑界面-->
		<el-dialog title="编辑信息" :visible.sync="editFormVisible" :close-on-click-modal="false">
			<el-form :model="editForm" label-width="200px" ref="editForm" class="clearfix">
				<el-form-item label="项目编号" prop="id" class="fl" style="width: 50%;float: left;">
					<el-input v-model="editForm.id" auto-complete="off" class="edit-input" disabled></el-input>
				</el-form-item>
				<el-form-item label="行政区位级别" prop="area" class="fl" style="width: 50%;float: left;">
					<el-input v-model="editForm.area" auto-complete="off" class="edit-input"></el-input>
				</el-form-item>
				<el-form-item label="项目名称" prop="name" class="fl" style="width: 50%;float: left;">
					<el-input v-model="editForm.name" class="edit-input"></el-input>
				</el-form-item>
				<el-form-item label="报告编号" prop="assessment" class="fl" style="width: 50%;float: left;">
					<el-input v-model="editForm.assessment" auto-complete="off" class="edit-input"></el-input>
				</el-form-item>
				<el-form-item label="房屋性质" prop="type" class="fl" style="width: 50%;float: left;">
					<!-- <el-input v-model="editForm.type" auto-complete="off" class="edit-input"></el-input> -->
					<template>
						<el-select v-model="editForm.type" placeholder="请选择" style="width: 100%;">
							<el-option v-for="(item,index) in fieldOption" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</template>
				</el-form-item>
				<el-form-item label="估价目的" prop="purpose" class="fl" style="width: 50%;float: left;">
					<el-input v-model="editForm.purpose" auto-complete="off" class="edit-input"></el-input>
				</el-form-item>
				<el-form-item label="用途" prop="useFor" class="fl" style="width: 50%;float: left;">
					<!-- <el-input v-model="editForm.useFor" auto-complete="off" class="edit-input"></el-input> -->
					<template>
						<el-select v-model="editForm.useFor" placeholder="请选择" style="width: 100%;">
							<el-option v-for="(item,index) in useOption" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</template>
				</el-form-item>
				<el-form-item label="房屋征收决定公告" prop="notice" class="fl" style="width: 50%;float: left;">
					<el-input v-model="editForm.notice" auto-complete="off" class="edit-input"></el-input>
				</el-form-item>
				<el-form-item label="成套标准房屋单价（元/㎡）" prop="completePrice" class="fl" style="width: 50%;float: left;">
					<el-input v-model="editForm.completePrice" auto-complete="off" class="edit-input"></el-input>
				</el-form-item>
				<el-form-item label="非成套标准房屋单价（元/㎡）" prop="notCompletePrice" class="fl" style="width: 50%;float: left;">
					<el-input v-model="editForm.notCompletePrice" auto-complete="off" class="edit-input"></el-input>
				</el-form-item>
				<el-form-item label="地大于房价格（元/㎡）" prop="overPrice" class="fl" style="width: 50%;float: left;">
					<el-input v-model="editForm.overPrice" auto-complete="off" class="edit-input"></el-input>
				</el-form-item>
				<el-form-item label="价值时点" prop="valueTime" class="fl" style="width: 50%;float: left;">
					<el-date-picker v-model="editForm.valueTime" type="date" placeholder="选择日期时间" value-format="yyyy-MM-dd"></el-date-picker>
				</el-form-item>
				<el-form-item label="是否有折扣率" prop="isDiscount" class="fl" style="width: 50%;float: left;">
					 <template>
					 	<el-select v-model="editForm.isDiscount" @change="discountChange" placeholder="请选择" style="width: 100%;">
					 		<el-option v-for="(item,index) in isDiscountOption" :key="item.value" :label="item.label" :value="item.value">
					 		</el-option>
					 	</el-select>
					 </template>
				</el-form-item>
				<el-form-item label="折扣率" prop="discount" class="fl" style="width: 50%;float:left;" v-show="editForm.isDiscount == '是'">
					<el-input v-model="editForm.discount" auto-complete="off" class="edit-input"></el-input>
				</el-form-item>
				<el-form-item label="评估机构" prop="institutions" class="fl" style="width: 50%;float: left;">
					<el-input v-model="editForm.institutions" auto-complete="off" class="edit-input"></el-input>
				</el-form-item>
				<el-form-item label="项目负责人" prop="projectLeader" class="fl" style="width: 50%;float: left;">
					<!-- <el-input v-model="editForm.projectLeader" auto-complete="off" class="edit-input"></el-input> -->
					<template>
						<el-select v-model="editForm.projectLeader" placeholder="请选择" style="width: 100%;">
							<el-option v-for="(item,index) in projectLeaderOption" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</template>
				</el-form-item>
				<el-form-item label="技术负责人" prop="technicalLeader" class="fl" style="width: 50%;float: left;">
					<!-- <el-input v-model="editForm.technicalLeader" auto-complete="off" class="edit-input"></el-input> -->
					<template>
						<el-select v-model="editForm.technicalLeader" placeholder="请选择" style="width: 100%;">
							<el-option v-for="(item,index) in technicalLeaderOption" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</template>
				</el-form-item>
				<el-form-item label="注册房地产估价师" prop="estateAppraiser " class="fl" style="width: 50%;float: left;">
					<!-- <el-input v-model="editForm.estateAppraiser" auto-complete="off" class="edit-input"></el-input> -->
					<template>
						<el-select v-model="editForm.estateAppraiser" placeholder="请选择" style="width: 100%;">
							<el-option v-for="(item,index) in estateAppraiserOption" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</template>
				</el-form-item>
				<el-form-item label="委托单位" prop="valuationPrincipal " class="fl" style="width: 50%;float: left;">
					<el-input v-model="editForm.valuationPrincipal " auto-complete="off" class="edit-input"></el-input>
				</el-form-item>
				<el-form-item label="现场评估工作地点" prop="onlineEstateWorkArea" class="fl" style="width: 50%;float: left;">
					<el-input v-model="editForm.onlineEstateWorkArea" auto-complete="off" class="edit-input"></el-input>
				</el-form-item>
				<el-form-item label="备注" prop="remark" class="fl" style="width: 50%;float: left;">
					<el-input type="textarea" v-model="editForm.remark"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="submitEditForm(editForm)">保存</el-button>
				<el-button @click.native="editFormVisible = false">取消</el-button>
			</div>
		</el-dialog>
		
		<!--查看界面-->
		<el-dialog title="查看信息" :visible.sync="lookFormVisible" :close-on-click-modal="false">
			<el-form :model="searchForm" label-width="200px" ref="searchForm" class="clearfix">
				<el-form-item label="项目编号" prop="id" class="fl" style="width: 50%;float: left;">
					<el-input v-model="searchForm.id" auto-complete="off" class="edit-input" disabled></el-input>
				</el-form-item>
				<el-form-item label="行政区位级别" prop="area" class="fl" style="width: 50%;float: left;">
					<el-input v-model="searchForm.area" auto-complete="off" class="edit-input" disabled></el-input>
				</el-form-item>
				<el-form-item label="项目名称" prop="name" class="fl" style="width: 50%;float: left;">
					<el-input v-model="searchForm.name" class="edit-input" disabled></el-input>
				</el-form-item>
				<el-form-item label="报告编号" prop="assessment" class="fl" style="width: 50%;float: left;">
					<el-input v-model="searchForm.assessment" auto-complete="off" class="edit-input" disabled></el-input>
				</el-form-item>
				<el-form-item label="房屋性质" prop="type" class="fl" style="width: 50%;float: left;">
					<el-input v-model="searchForm.type" auto-complete="off" class="edit-input" disabled></el-input>
				</el-form-item>
				<el-form-item label="估价目的" prop="purpose" class="fl" style="width: 50%;float: left;">
					<el-input v-model="searchForm.purpose" auto-complete="off" class="edit-input" disabled></el-input>
				</el-form-item>
				<el-form-item label="用途" prop="useFor" class="fl" style="width: 50%;float: left;">
					<el-input v-model="searchForm.useFor" auto-complete="off" class="edit-input" disabled></el-input>
				</el-form-item>
				<el-form-item label="房屋征收决定公告" prop="notice" class="fl" style="width: 50%;float: left;">
					<el-input v-model="searchForm.notice" auto-complete="off" class="edit-input" disabled></el-input>
				</el-form-item>
				<el-form-item label="成套标准房屋单价（元/㎡）" prop="completePrice" class="fl" style="width: 50%;float: left;">
					<el-input v-model="searchForm.completePrice" auto-complete="off" class="edit-input" disabled></el-input>
				</el-form-item>
				<el-form-item label="非成套标准房屋单价（元/㎡）" prop="notCompletePrice" class="fl" style="width: 50%;float: left;">
					<el-input v-model="searchForm.notCompletePrice" auto-complete="off" class="edit-input" disabled></el-input>
				</el-form-item>
				<el-form-item label="地大于房价格（元/㎡）" prop="overPrice" class="fl" style="width: 50%;float: left;">
					<el-input v-model="searchForm.overPrice" auto-complete="off" class="edit-input" disabled></el-input>
				</el-form-item>
				<el-form-item label="价值时点" prop="valueTime" class="fl" style="width: 50%;float: left;">
					<el-input v-model="searchForm.valueTime" auto-complete="off" class="edit-input" disabled></el-input>
				</el-form-item>
				<el-form-item label="是否有折扣率" prop="isDiscount" class="fl" style="width: 50%;float: left;">
					<el-input v-model="searchForm.isDiscount" auto-complete="off" class="edit-input" disabled></el-input>
				</el-form-item>
				<el-form-item label="折扣率" prop="discount" class="fl" style="width: 50%;float: left;" v-show="lookFlag">
					<el-input v-model="searchForm.discount" auto-complete="off" class="edit-input" disabled></el-input>
				</el-form-item>
				<el-form-item label="评估机构" prop="institutions" class="fl" style="width: 50%;float: left;">
					<el-input v-model="searchForm.institutions" auto-complete="off" class="edit-input" disabled></el-input>
				</el-form-item>
				<el-form-item label="项目负责人" prop="projectLeader" class="fl" style="width: 50%;float: left;">
					<el-input v-model="searchForm.projectLeader" auto-complete="off" class="edit-input" disabled></el-input>
				</el-form-item>
				<el-form-item label="技术负责人" prop="technicalLeader" class="fl" style="width: 50%;float: left;">
					<el-input v-model="searchForm.technicalLeader" auto-complete="off" class="edit-input" disabled></el-input>
				</el-form-item>
				<el-form-item label="注册房地产估价师" prop="estateAppraiser " class="fl" style="width: 50%;float: left;">
					<el-input v-model="searchForm.estateAppraiser" auto-complete="off" class="edit-input" disabled></el-input>
				</el-form-item>
				<el-form-item label="委托单位" prop="valuationPrincipal " class="fl" style="width: 50%;float: left;">
					<el-input v-model="searchForm.valuationPrincipal " auto-complete="off" class="edit-input" disabled></el-input>
				</el-form-item>
				<el-form-item label="现场评估工作地点" prop="onlineEstateWorkArea" class="fl" style="width: 50%;float: left;">
					<el-input v-model="searchForm.onlineEstateWorkArea" auto-complete="off" class="edit-input" disabled></el-input>
				</el-form-item>
				<el-form-item label="备注" prop="remark" class="fl" style="width: 50%;float: left;">
					<el-input type="textarea" v-model="searchForm.remark" disabled></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<!-- <el-button @click="submitForm(searchForm)">保存</el-button> -->
				<el-button @click.native="lookFormVisible = false">取消</el-button>
			</div>
		</el-dialog>
		
		<!--新增信息界面-->
		<el-dialog title="新增信息界面" :visible.sync="newFormVisible" :close-on-click-modal="false">
			<el-form :model="newAddForm" label-width="200px" ref="editForm" class="clearfix">
				<el-form-item label="项目编号" prop="id" class="fl" style="width: 50%;float: left;">
					<el-input v-model="newAddForm.id" auto-complete="off" class="edit-input" disabled></el-input>
				</el-form-item>
				<el-form-item label="行政区位级别" prop="area" class="fl" style="width: 50%;float: left;">
					<el-input v-model="newAddForm.area" auto-complete="off" class="edit-input"></el-input>
				</el-form-item>
				<el-form-item label="项目名称" prop="name" class="fl" style="width: 50%;float: left;">
					<el-input v-model="newAddForm.name" class="edit-input"></el-input>
				</el-form-item>
				<el-form-item label="报告编号" prop="assessment" class="fl" style="width: 50%;float: left;">
					<el-input v-model="newAddForm.assessment" auto-complete="off" class="edit-input"></el-input>
				</el-form-item>
				<el-form-item label="房屋性质" prop="type" class="fl" style="width: 50%;float: left;">
					<template>
						<el-select v-model="newAddForm.type" placeholder="请选择" style="width: 100%;">
							<el-option v-for="(item,index) in fieldOption" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</template>
				</el-form-item>
				<el-form-item label="估价目的" prop="purpose" class="fl" style="width: 50%;float: left;">
					<el-input v-model="newAddForm.purpose" auto-complete="off" class="edit-input"></el-input>
				</el-form-item>
				<el-form-item label="用途" prop="useFor" class="fl" style="width: 50%;float: left;">
					<template>
						<el-select v-model="newAddForm.useFor" placeholder="请选择" style="width: 100%;">
							<el-option v-for="(item,index) in useOption" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</template>
				</el-form-item>
				<el-form-item label="房屋征收决定公告" prop="notice" class="fl" style="width: 50%;float: left;">
					<el-input v-model="newAddForm.notice" auto-complete="off" class="edit-input"></el-input>
				</el-form-item>
				<el-form-item label="成套标准房屋单价（元/㎡）" prop="completePrice" class="fl" style="width: 50%;float: left;">
					<el-input v-model="newAddForm.completePrice" auto-complete="off" class="edit-input"></el-input>
				</el-form-item>
				<el-form-item label="非成套标准房屋单价（元/㎡）" prop="notCompletePrice" class="fl" style="width: 50%;float: left;">
					<el-input v-model="newAddForm.notCompletePrice" auto-complete="off" class="edit-input"></el-input>
				</el-form-item>
				<el-form-item label="地大于房价格（元/㎡）" prop="overPrice" class="fl" style="width: 50%;float: left;">
					<el-input v-model="newAddForm.overPrice" auto-complete="off" class="edit-input"></el-input>
				</el-form-item>
				<el-form-item label="价值时点" prop="valueTime" class="fl value-time" style="width: 50%;float: left;overflow: hidden;">
					<!-- <el-input v-model="newAddForm.valueTime" auto-complete="off" class="edit-input"></el-input> -->
					<el-date-picker v-model="newAddForm.valueTime" type="date" placeholder="选择日期时间" value-format="yyyy-MM-dd"></el-date-picker>
				</el-form-item>
				<el-form-item label="是否有折扣率" prop="isDiscount" class="fl" style="width: 50%;float: left;">
					<!-- <el-input v-model="newAddForm.isDiscount" auto-complete="off" class="edit-input"></el-input> -->
					<template>
						<el-select v-model="newAddForm.isDiscount" placeholder="请选择" style="width: 100%;">
							<el-option v-for="(item,index) in isDiscountOption" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</template>
				</el-form-item>
				<el-form-item v-show="newAddForm.isDiscount == '是'" label="折扣率" prop="discount" class="fl" style="width: 50%;float: left;">
					<el-input v-model="newAddForm.discount" auto-complete="off" class="edit-input"></el-input>
				</el-form-item>
				<el-form-item label="评估机构" prop="institutions" class="fl" style="width: 100%;float: left;">
					<el-input v-model="newAddForm.institutions" auto-complete="off" class="edit-input"></el-input>
				</el-form-item>
				<el-form-item label="项目负责人" prop="projectLeader" class="fl" style="width: 50%;float: left;">
					<!-- <el-input v-model="newAddForm.projectLeader" auto-complete="off" class="edit-input"></el-input> -->
					<template>
						<el-select v-model="newAddForm.projectLeader" placeholder="请选择" style="width: 100%;">
							<el-option v-for="(item,index) in projectLeaderOption" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</template>
				</el-form-item>
				<el-form-item label="技术负责人" prop="technicalLeader" class="fl" style="width: 50%;float: left;">
					<!-- <el-input v-model="newAddForm.technicalLeader" auto-complete="off" class="edit-input"></el-input> -->
					<template>
						<el-select v-model="newAddForm.technicalLeader" placeholder="请选择" style="width: 100%;">
							<el-option v-for="(item,index) in technicalLeaderOption" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</template>
				</el-form-item>
				<el-form-item label="注册房地产估价师" prop="estateAppraiser " class="fl" style="width: 50%;float: left;">
					<!-- <el-input v-model="newAddForm.estateAppraiser" auto-complete="off" class="edit-input"></el-input> -->
					<template>
						<el-select v-model="newAddForm.estateAppraiser" placeholder="请选择" style="width: 100%;">
							<el-option v-for="(item,index) in estateAppraiserOption" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</template>
				</el-form-item>
				<el-form-item label="委托单位" prop="valuationPrincipal " class="fl" style="width: 50%;float: left;">
					<el-input v-model="newAddForm.valuationPrincipal " auto-complete="off" class="edit-input"></el-input>
				</el-form-item>
				<el-form-item label="现场评估工作地点" prop="onlineEstateWorkArea" class="fl" style="width: 50%;float: left;">
					<el-input v-model="newAddForm.onlineEstateWorkArea" auto-complete="off" class="edit-input"></el-input>
				</el-form-item>
				<el-form-item label="备注" prop="remark" class="fl" style="width: 100%;float: left;">
					<el-input type="textarea" v-model="newAddForm.remark"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="submitAddForm(newAddForm)">保存</el-button>
				<el-button @click.native="newFormVisible = false">取消</el-button>
			</div>
		</el-dialog>
		
		
		<!-- 上传文件 -->
		<el-dialog title="项目资料归档" :visible.sync="uploadFormVisible">
			<el-form>
				<el-form-item label="委托合同" class="fl">
					<el-upload class="upload-demo" ref="upload" name="file" :action= "UploadUrl()" 
					:on-preview="handlePreview"
					 accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx" 
					 :on-remove="handleRemove" 
					 :before-remove="beforeRemove" 
					 :auto-upload="true" 
					 :on-change="handleChange" multiple :limit="1" 
					 :on-exceed="handleExceed" 
					 :file-list="fileList">
						<!-- <div prop="fileCheck" v-show="false">{{fileCheck}}</div> -->
						<el-button slot="trigger" size="small" type="primary">选择文件</el-button>
						<div slot="tip" class="el-upload__tip">支持扩展名：.jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx</div>
						<a class='download' v-show={downloadVisible} :href='downloadHttp' download=""  title="下载">下载</a>
					</el-upload>
				</el-form-item>
				<el-form-item label="公证书" class="fl">
					<el-upload class="upload-demo" ref="upload1" name="file" :action= "UploadUrl1()"
					:on-preview="handlePreview"
					 accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx" 
					 :on-remove="handleRemove" 
					 :before-remove="beforeRemove" 
					 :auto-upload="true" 
					 :on-change="handleChange1" multiple :limit="1" 
					 :on-exceed="handleExceed" 
					 :file-list="fileList1">
						<!-- <div prop="fileCheck" v-show="false">{{fileCheck}}</div> -->
						<el-button slot="trigger" size="small" type="primary">选择文件</el-button>
						<div slot="tip" class="el-upload__tip">支持扩展名：.jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx</div>
						<a class='download' v-show={downloadVisible1} :href='downloadHttp1' download=""  title="下载">下载</a>
					</el-upload>
				</el-form-item>
				<el-form-item label="征收决定" class="fl">
					<el-upload class="upload-demo" ref="upload2" name="file" :action= "UploadUrl2()" 
					:on-preview="handlePreview"
					 accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx" 
					 :on-remove="handleRemove" 
					 :before-remove="beforeRemove" 
					 :auto-upload="true" 
					 :on-change="handleChange2" multiple :limit="1" 
					 :on-exceed="handleExceed" 
					 :file-list="fileList2">
						<!-- <div prop="fileCheck" v-show="false">{{fileCheck}}</div> -->
						<el-button slot="trigger" size="small" type="primary">选择文件</el-button>
						<div slot="tip" class="el-upload__tip">支持扩展名：.jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx</div>
						<a class='download' v-show={downloadVisible2} :href='downloadHttp2' download=""  title="下载">下载</a>
					</el-upload>
				</el-form-item>
				<el-form-item label="项目批文" class="fl">
					<el-upload class="upload-demo" ref="upload3" name="file" :action= "UploadUrl3()" 
					:on-preview="handlePreview"
					 accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx" 
					 :on-remove="handleRemove" 
					 :before-remove="beforeRemove" 
					 :auto-upload="true" 
					 :on-change="handleChange3" multiple :limit="1" 
					 :on-exceed="handleExceed" 
					 :file-list="fileList3">
						<!-- <div prop="fileCheck" v-show="false">{{fileCheck}}</div> -->
						<el-button slot="trigger" size="small" type="primary">选择文件</el-button>
						<div slot="tip" class="el-upload__tip">支持扩展名：.jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx</div>
						<a class='download' v-show={downloadVisible3}  :href='downloadHttp3' download=""  title="下载">下载</a>	
					</el-upload>
				</el-form-item>
				<el-form-item label="产权情况表" class="fl">
					<el-upload class="upload-demo" ref="upload4" name="file" :action= "UploadUrl4()" 
					:on-preview="handlePreview"
					 accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx" 
					 :on-remove="handleRemove" 
					 :before-remove="beforeRemove" 
					 :auto-upload="true" 
					 :on-change="handleChange4" multiple :limit="1" 
					 :on-exceed="handleExceed" 
					 :file-list="fileList4">
						<!-- <div prop="fileCheck" v-show="false">{{fileCheck}}</div> -->
						<el-button slot="trigger" size="small" type="primary">选择文件</el-button>
						<div slot="tip" class="el-upload__tip">支持扩展名：.jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx</div>
						<a class='download' v-show={downloadVisible4}  :href='downloadHttp4' download=""  title="下载">下载</a>
					</el-upload>
				</el-form-item>
				<el-form-item label="丘号图" class="fl">
					<el-upload class="upload-demo" ref="upload5" name="file" :action= "UploadUrl5()" 
					:on-preview="handlePreview"
					 accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx" 
					 :on-remove="handleRemove" 
					 :before-remove="beforeRemove" 
					 :auto-upload="true" 
					 :on-change="handleChange5" multiple :limit="1" 
					 :on-exceed="handleExceed" 
					 :file-list="fileList5">
						<!-- <div prop="fileCheck" v-show="false">{{fileCheck}}</div> -->
						<el-button slot="trigger" size="small" type="primary">选择文件</el-button>
						<div slot="tip" class="el-upload__tip">支持扩展名：.jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx</div>
						<a class='download' v-show={downloadVisible5}  :href='downloadHttp5' download=""  title="下载">下载</a>
					</el-upload>
				</el-form-item>
				<el-form-item label="红线图" class="fl">
					<el-upload class="upload-demo" ref="upload6" name="file" :action= "UploadUrl6()" 
					:on-preview="handlePreview"
					 accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx" 
					 :on-remove="handleRemove" 
					 :before-remove="beforeRemove" 
					 :auto-upload="true" 
					 :on-change="handleChange6" multiple :limit="1" 
					 :on-exceed="handleExceed" 
					 :file-list="fileList6">
						<!-- <div prop="fileCheck" v-show="false">{{fileCheck}}</div> -->
						<el-button slot="trigger" size="small" type="primary">选择文件</el-button>
						<div slot="tip" class="el-upload__tip">支持扩展名：.jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx</div>
						<a class='download' v-show={downloadVisible6}  :href='downloadHttp6' download=""  title="下载">下载</a>
					</el-upload>
				</el-form-item>
				<el-form-item label="地图勘测成果报告及图纸" class="fl">
					<el-upload class="upload-demo" ref="upload7" name="file" :action= "UploadUrl7()" 
					:on-preview="handlePreview"
					 accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx" 
					 :on-remove="handleRemove" 
					 :before-remove="beforeRemove" 
					 :auto-upload="true" 
					 :on-change="handleChange7" multiple :limit="1" 
					 :on-exceed="handleExceed" 
					 :file-list="fileList7">
						<!-- <div prop="fileCheck" v-show="false">{{fileCheck}}</div> -->
						<el-button slot="trigger" size="small" type="primary">选择文件</el-button>
						<div slot="tip" class="el-upload__tip">支持扩展名：.jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx</div>
						<a class='download' v-show={downloadVisible7}  :href='downloadHttp7' download=""  title="下载">下载</a>
					</el-upload>
				</el-form-item>
				<el-form-item label="价格测算过程" class="fl">
					<el-upload class="upload-demo" ref="upload8" name="file" :action= "UploadUrl8()" 
					:on-preview="handlePreview"
					 accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx" 
					 :on-remove="handleRemove" 
					 :before-remove="beforeRemove" 
					 :auto-upload="true" 
					 :on-change="handleChange8" multiple :limit="1" 
					 :on-exceed="handleExceed" 
					 :file-list="fileList8">
						<!-- <div prop="fileCheck" v-show="false">{{fileCheck}}</div> -->
						<el-button slot="trigger" size="small" type="primary">选择文件</el-button>
						<div slot="tip" class="el-upload__tip">支持扩展名：.jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx</div>
						<a class='download' v-show={downloadVisible8}  :href='downloadHttp8' download=""  title="下载">下载</a>
					</el-upload>
				</el-form-item>
				<el-form-item label="现场勘查通知照片" class="fl">
					<el-upload class="upload-demo" ref="upload9" name="file" :action= "UploadUrl9()" 
					:on-preview="handlePreview"
					 accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx" 
					 :on-remove="handleRemove" 
					 :before-remove="beforeRemove" 
					 :auto-upload="true" 
					 :on-change="handleChange9" multiple :limit="1" 
					 :on-exceed="handleExceed" 
					 :file-list="fileList9">
						<!-- <div prop="fileCheck" v-show="false">{{fileCheck}}</div> -->
						<el-button slot="trigger" size="small" type="primary">选择文件</el-button>
						<div slot="tip" class="el-upload__tip">支持扩展名：.jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx</div>
						<a class='download' v-show={downloadVisible9}  :href='downloadHttp9' download=""  title="下载">下载</a>
					</el-upload>
				</el-form-item>
				<el-form-item label="公示照片" class="fl">
					<el-upload class="upload-demo" ref="upload10" name="file" :action= "UploadUrl10()" 
					:on-preview="handlePreview"
					 accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx" 
					 :on-remove="handleRemove" 
					 :before-remove="beforeRemove" 
					 :auto-upload="true" 
					 :on-change="handleChange10" multiple :limit="1" 
					 :on-exceed="handleExceed" 
					 :file-list="fileList10">
						<!-- <div prop="fileCheck" v-show="false">{{fileCheck}}</div> -->
						<el-button slot="trigger" size="small" type="primary">选择文件</el-button>
						<div slot="tip" class="el-upload__tip">支持扩展名：.jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx</div>
						<a class='download' v-show={downloadVisible10}  :href='downloadHttp10' download=""  title="下载">下载</a>
					</el-upload>
				</el-form-item>
				<el-form-item label="现场办公照片" class="fl">
					<el-upload class="upload-demo" ref="upload11" name="file" :action= "UploadUrl11()" 
					:on-preview="handlePreview"
					 accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx" 
					 :on-remove="handleRemove" 
					 :before-remove="beforeRemove" 
					 :auto-upload="true" 
					 :on-change="handleChange11" multiple :limit="1" 
					 :on-exceed="handleExceed" 
					 :file-list="fileList11">
						<!-- <div prop="fileCheck" v-show="false">{{fileCheck}}</div> -->
						<el-button slot="trigger" size="small" type="primary">选择文件</el-button>
						<div slot="tip" class="el-upload__tip">支持扩展名：.jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx</div>
						<a class='download' v-show={downloadVisible11}  :href='downloadHttp11' download=""  title="下载">下载</a>
					</el-upload>
				</el-form-item>
				<el-form-item label="整体评估报告" class="fl">
					<el-upload class="upload-demo" ref="upload12" name="file" :action= "UploadUrl12()" 
					:on-preview="handlePreview"
					 accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx" 
					 :on-remove="handleRemove" 
					 :before-remove="beforeRemove" 
					 :auto-upload="true" 
					 :on-change="handleChange12" multiple :limit="1" 
					 :on-exceed="handleExceed" 
					 :file-list="fileList12">
						<!-- <div prop="fileCheck" v-show="false">{{fileCheck}}</div> -->
						<el-button slot="trigger" size="small" type="primary">选择文件</el-button>
						<div slot="tip" class="el-upload__tip">支持扩展名：.jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx</div>
						<a class='download' v-show={downloadVisible12}  :href='downloadHttp12' download=""  title="下载">下载</a>
					</el-upload>
				</el-form-item>
			</el-form>
		</el-dialog>
	</section>
</template>

<script>
import { getProjectList, removeUser, addNewProject, searchProjectData, deleteProject, updateProject, getProjectId } from '@/api/project'
import { getDictionary } from '@/api/entry'
export default{
	data() {
		return {
			projectList:[],
			fileList: [],fileList1: [],fileList2: [],fileList3: [],
			fileList4: [],fileList5: [],fileList6: [],fileList7: [],
			fileList8: [],fileList9: [],fileList10: [],fileList11: [],fileList12: [],
			downloadHttp: '',downloadHttp1: '',downloadHttp2: '',downloadHttp3: '',downloadHttp4: '',
			downloadHttp5: '',downloadHttp6: '',downloadHttp7: '',downloadHttp8: '',downloadHttp9: '',
			downloadHttp10: '',downloadHttp11: '',downloadHttp12: '',
			downloadVisible: false,downloadVisible1: false,downloadVisible2: false,downloadVisible3: false,downloadVisible4: false,
			downloadVisible5: false,downloadVisible6: false,downloadVisible7: false,downloadVisible8: false,downloadVisible9: false,
			downloadVisible10: false,downloadVisible11: false,downloadVisible12: false,
			total: 0,
			page: 1,
			listLoading: false,
			sels: [],//列表选中列
			editFormVisible: false,//编辑界面是否显示
			lookFormVisible: false,
			newFormVisible: false,
			editLoading: false,
			uploadFormVisible: false,
			searchForm: {},
			newAddForm: {},
			fieldOption: [],
			useOption:[],
			projectLeaderOption:[],
			technicalLeaderOption:[],
			estateAppraiserOption:[],
			isDiscountOption:[{
				lable: "是",
				value: "是"
			},{
				label: "否",
				value: "否"
			}],
			//编辑界面数据
			editForm: {},
			titleMap: {
				addProject: "新建项目",
				editProject: "查看/编辑项目"
			},
			dialogStatus: '',
			fileId: '',
			lookFlag: true,
			editDisFlag: true
		}
	},
	mounted() {
		this.fetchProjectList()
	},
	methods: {
		handleCurrentChange(val) {
			this.page = val;
			this.fetchProjectList();
		},
		fetchProjectList() {
			let para = {
				page: this.page
			};
			this.listLoading = true;
			getProjectList(para).then((res) => {
				this.total = res.total;
				this.projectList = res.body;
				this.listLoading = false;
				console.log(res);
			})
			getDictionary().then((res) => {
				console.log(res.data.checkSystem)
				let checkData = res.data.checkSystem;
				this.fieldOption = [];
				this.useOption = [];
				this.projectLeaderOption = [];
				this.technicalLeaderOption = [];
				this.estateAppraiserOption = [];
				checkData[5].fwxz && checkData[5].fwxz.forEach((item,index) => {
					this.fieldOption.push({
						label: item.value,
						value: item.value
					})
				})
				checkData[4].yt && checkData[4].yt.forEach((item,index) => {
					this.useOption.push({
						label: item.value,
						value: item.value
					})
				})
				checkData[3].gjmdsp && checkData[3].gjmdsp.forEach((item,index) => {
					// this.useOption.push({
					// 	label: item.value,
					// 	value: item.value
					// })
				})
				checkData[2].xmfzr && checkData[2].xmfzr.forEach((item,index) => {
					this.projectLeaderOption.push({
						label: item.value,
						value: item.value
					})
				})
				checkData[1].jsfzr && checkData[1].jsfzr.forEach((item,index) => {
					this.technicalLeaderOption.push({
						label: item.value,
						value: item.value
					})
				})
				checkData[0].zcfdcgjs && checkData[0].zcfdcgjs.forEach((item,index) => {
					this.estateAppraiserOption.push({
						label: item.value,
						value: item.value
					})
				})
			})
		},
		selsChange: function (sels) {
			this.sels = sels;
		},
		discountChange(event){
			console.log(event)
			event == "是" ? this.editDisFlag = true : this.editDisFlag = false
			
		},
		// 新建项目
		handleAdd: function(){
			this.newAddForm = {
				id: '',
				name: "",
				area:"",
				assessment:"苏天征估第",
				creatorName: '顾研',
				status: '',
				allcount: '',
				notEnable: '',
				enable: '',
				checkCount:'',
				completePrice: "",
				notCompletePrice: "",
				registrar: "",
				type: "",
				remark:"",
				purpose:'',
				use:'',
				notice:'',
				overPrice:'',
				valueTime:'',
				isDiscount:'',
				discount:'',
				institutions:'江苏天圣房地产拆迁评估有限公司',
				projectLeader:'',
				technicalLeader:'',
				assess:'',
				estateAppraiser: '',
				valuationPrincipal: ''
			};
			getProjectId().then((res) => {
				if(res.status == 200){
					this.newFormVisible = true;
					this.newAddForm.id = res.body;
				}
			})
			
			// this.dialogStatus = "addProject";
			// this.editForm = Object.assign({});
		},
		// 查看
		handleLook: function(index, row){
			let para = row.id;
			searchProjectData(para).then((res) => {
				// this.listLoading = false;
				this.lookFormVisible = true;
				this.searchForm = res.body;
				this.searchForm.isDiscount == false ? this.searchForm.isDiscount = '否' : this.searchForm.isDiscount = '是'
				this.searchForm.isDiscount == '否' ? (this.lookFlag = false) : this.lookFlag = true
				console.log(res.body);
				// this.fetchProjectList();
			});
		},
		//删除
		handleDel: function (index, row) {
			this.$confirm('确认删除该记录吗?', '提示', {
				type: 'warning'
			}).then(() => {
				this.listLoading = true;
				//NProgress.start();
				let para = row.id;
				deleteProject(para).then((res) => {
					this.listLoading = false;
					//NProgress.done();
					this.$message({
						message: '删除成功',
						type: 'success'
					});
					this.fetchProjectList();
				});
			}).catch(() => {
		
			});
		},
		handleUpload: function(index, row){
			this.uploadFormVisible = true;
			let para = row.id;
			this.fileId = para;
			this.fileList = [];this.fileList1 = [];this.fileList2 = [];this.fileList3 = [];
			this.fileList4 = [];this.fileList5 = [];this.fileList6 = [];this.fileList7 = [];
			this.fileList8 = [];this.fileList9 = [];this.fileList10 = [];this.fileList11 = [];
			this.fileList12 = [];
			this.downloadHttp = '';this.downloadHttp1 = '';this.downloadHttp2 = '';this.downloadHttp3 = '';this.downloadHttp4 = '';
			this.downloadHttp5 = '';this.downloadHttp6 = '';this.downloadHttp7 = '';this.downloadHttp8 = '';this.downloadHttp9 = '';
			this.downloadHttp10 = '';this.downloadHttp11 = '';this.downloadHttp12 = '';
			this.downloadVisible = false;this.downloadVisible1 = false;this.downloadVisible2 = false;this.downloadVisible3 = false;
			this.downloadVisible4 = false;this.downloadVisible5 = false;this.downloadVisible6 = false;this.downloadVisible7 = false;
			this.downloadVisible8 = false;this.downloadVisible9 = false;this.downloadVisible10 = false;this.downloadVisible11 = false;
			this.downloadVisible12 = false;
			searchProjectData(para).then((res) => {
				this.searchForm = res.body;
				let fileData = res.body.houseAssessProjectFiles
				console.log("文件列表",fileData)
				if(fileData == undefined){
					
				}else{
					fileData.forEach( (item,index) => {
						if(item.fileType == 'commissionContract'){
							this.fileList.push({
								name: item.fileName,
								url: item.downloadAddr
							})
							this.downloadHttp = item.downloadAddr
							this.downloadVisible = true;
						}else if(item.fileType == 'notarization'){
							this.fileList1.push({
								name: item.fileName,
								url: item.downloadAddr
							})
							this.downloadHttp1 = item.downloadAddr
							this.downloadVisible1 = true;
						}else if(item.fileType == 'expropriationDecision'){
							this.fileList2.push({
								name: item.fileName,
								url: item.downloadAddr
							})
							this.downloadHttp2 = item.downloadAddr
							this.downloadVisible2 = true;
						}else if(item.fileType == 'projectApproval'){
							this.fileList3.push({
								name: item.fileName,
								url: item.downloadAddr
							})
							this.downloadHttp3 = item.downloadAddr
							this.downloadVisible3 = true;
						}else if(item.fileType == 'propertyRight'){
							this.fileList4.push({
								name: item.fileName,
								url: item.downloadAddr
							})
							this.downloadHttp4 = item.downloadAddr
							this.downloadVisible4 = true;
						}else if(item.fileType == 'hillMap'){
							this.fileList5.push({
								name: item.fileName,
								url: item.downloadAddr
							})
							this.downloadHttp5 = item.downloadAddr
							this.downloadVisible5 = true;
						}else if(item.fileType == 'redMap'){
							this.fileList6.push({
								name: item.fileName,
								url: item.downloadAddr
							})
							this.downloadHttp6 = item.downloadAddr
							this.downloadVisible6 = true;
						}else if(item.fileType == 'drawMapInfo'){
							this.fileList7.push({
								name: item.fileName,
								url: item.downloadAddr
							})
							this.downloadVisible7 = true;
							this.downloadHttp7 = item.downloadAddr
						}else if(item.fileType == 'priceMeasurementProcess'){
							this.fileList8.push({
								name: item.fileName,
								url: item.downloadAddr
							})
							this.downloadHttp8 = item.downloadAddr
							this.downloadVisible8 = true;
						}else if(item.fileType == 'sceneInvestigationNoticePhoto'){
							this.fileList9.push({
								name: item.fileName,
								url: item.downloadAddr
							})
							this.downloadHttp9 = item.downloadAddr
							this.downloadVisible9 = true;
						}else if(item.fileType == 'publicPhoto'){
							this.fileList10.push({
								name: item.fileName,
								url: item.downloadAddr
							})
							this.downloadHttp10 = item.downloadAddr
							this.downloadVisible10 = true;
						}else if(item.fileType == 'sceneOfficePhoto'){
							this.fileList11.push({
								name: item.fileName,
								url: item.downloadAddr
							})
							this.downloadHttp11 = item.downloadAddr
							this.downloadVisible11 = true;
						}else if(item.fileType == 'overallAssessmentReport'){
							this.fileList12.push({
								name: item.fileName,
								url: item.downloadAddr
							})
							this.downloadHttp12 = item.downloadAddr
							this.downloadVisible12 = true;
						}
					})
					
					
				}
				console.log(res.body);
			});
		},
		//显示编辑界面
		handleEdit: function (index, row) {
			let para = row.id;
			searchProjectData(para).then((res) => {
				// this.listLoading = false;
				this.editFormVisible = true;
				this.editForm = res.body;
				if(this.editForm.isDiscount == false){
					this.editForm.isDiscount = "否";
				}else{
					this.editForm.isDiscount = "是";
				}
				console.log(res.body);
				// this.fetchProjectList();
			});
			// this.editFormVisible = true;
			// // this.dialogStatus = "editProject";
			// this.editForm = Object.assign({}, row);
			// console.log(this.editForm);
		},
		submitEditForm(editForm){
			if(editForm.isDiscount == "是"){
				editForm.isDiscount = 1;
			}else{
				editForm.isDiscount = 0;
			}
			this.$refs.editForm.validate((valid) => {
			  if (valid) {
				let para = editForm;
				updateProject(para).then((res) => {
					// this.listLoading = false;
					this.editFormVisible = false;
					// this.editForm = res.data;
					console.log(res.msg);
					this.fetchProjectList();
					
				});
			  } else {
				console.log('error submit!!');
				return false;
			  }
			});
		},
		// 提交表单
		submitAddForm(newAddForm){
			console.log(newAddForm);
			if(newAddForm.isDiscount == "是"){
				newAddForm.isDiscount = 1;
			}else{
				newAddForm.isDiscount = 0;
			}
			let para = newAddForm;
			addNewProject(para).then((res) => {
				if(res.status == 200){
					this.$message.success(res.msg);
					this.newFormVisible = false;
					this.fetchProjectList();
				}else{
					this.$message.error(res.msg);
				}
				
			});
		},
		handleRemove(file, fileList) {
			console.log(file, fileList);
		},
		handlePreview(file) {
			console.log(file);
		},
		handleExceed(files, fileList) {
			this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
		},
		beforeRemove(file, fileList) {
			return this.$confirm(`确定移除 ${ file.name }？`);
		},
		handleSuccess(response, file, fileList) {
			console.log(response);
			if (response.code == 200) {
				console.log(this.estateForm)
				this.estateForm.pdfUri = response.data[0].pdfPath
				this.estateForm.wordUri = response.data[0].wordPath
			} else {
				return;
			}
		},
	
		UploadUrl() {
			// console.log("传入的",this.fileId)
			return "tss/project/uploadProjectFile/$" + this.fileId + '/$commissionContract';
		},
		UploadUrl1() {
			// console.log("传入的",this.fileId)
			return "tss/project/uploadProjectFile/$" + this.fileId + '/$notarization';
		},
		UploadUrl2() {
			// console.log("传入的",this.fileId)
			return "tss/project/uploadProjectFile/$" + this.fileId + '/$expropriationDecision';
		},
		UploadUrl3() {
			// console.log("传入的",this.fileId)
			return "tss/project/uploadProjectFile/$" + this.fileId + '/$projectApproval';
		},
		UploadUrl4() {
			// console.log("传入的",this.fileId)
			return "tss/project/uploadProjectFile/$" + this.fileId + '/$propertyRight';
		},
		UploadUrl5() {
			// console.log("传入的",this.fileId)
			return "tss/project/uploadProjectFile/$" + this.fileId + '/$hillMap';
		},
		UploadUrl6() {
			// console.log("传入的",this.fileId)
			return "tss/project/uploadProjectFile/$" + this.fileId + '/$redMap';
		},
		UploadUrl7() {
			// console.log("传入的",this.fileId)
			return "tss/project/uploadProjectFile/$" + this.fileId + '/$drawMapInfo';
		},
		UploadUrl8() {
			// console.log("传入的",this.fileId)
			return "tss/project/uploadProjectFile/$" + this.fileId + '/$priceMeasurementProcess';
		},
		UploadUrl9() {
			// console.log("传入的",this.fileId)
			return "tss/project/uploadProjectFile/$" + this.fileId + '/$sceneInvestigationNoticePhoto';
		},
		UploadUrl10() {
			// console.log("传入的",this.fileId)
			return "tss/project/uploadProjectFile/$" + this.fileId + '/$publicPhoto';
		},
		UploadUrl11() {
			// console.log("传入的",this.fileId)
			return "tss/project/uploadProjectFile/$" + this.fileId + '/$sceneOfficePhoto';
		},
		UploadUrl12() {
			// console.log("传入的",this.fileId)
			return "tss/project/uploadProjectFile/$" + this.fileId + '/$overallAssessmentReport';
		},
		submitUpload() {
			this.UploadUrl()
			this.$refs.upload.submit();
		},
		uploadFile(file) {
			console.log(file);
		},
		handleChange(file, fileList) {
			this.fileList = fileList;
			this.file = file;
			this.fileCheck = fileList
			console.log(file)
		},
		handleChange1(file, fileList) {
			this.fileList1 = fileList;
			this.file = file;
			this.fileCheck = fileList
			console.log(file)
		},
		handleChange2(file, fileList) {
			this.fileList2 = fileList;
			this.file = file;
			this.fileCheck = fileList
			console.log(file)
		},
		handleChange3(file, fileList) {
			this.fileList3 = fileList;
			this.file = file;
			this.fileCheck = fileList
			console.log(file)
		},
		handleChange4(file, fileList) {
			this.fileList4 = fileList;
			this.file = file;
			this.fileCheck = fileList
			console.log(file)
		},
		handleChange5(file, fileList) {
			this.fileList5 = fileList;
			this.file = file;
			this.fileCheck = fileList
			console.log(file)
		},
		handleChange6(file, fileList) {
			this.fileList6 = fileList;
			this.file = file;
			this.fileCheck = fileList
			console.log(file)
		},
		handleChange7(file, fileList) {
			this.fileList7 = fileList;
			this.file = file;
			this.fileCheck = fileList
			console.log(file)
		},
		handleChange8(file, fileList) {
			this.fileList8 = fileList;
			this.file = file;
			this.fileCheck = fileList
			console.log(file)
		},
		handleChange9(file, fileList) {
			this.fileList9 = fileList;
			this.file = file;
			this.fileCheck = fileList
			console.log(file)
		},
		handleChange10(file, fileList) {
			this.fileList10 = fileList;
			this.file = file;
			this.fileCheck = fileList
			console.log(file)
		},
		handleChange11(file, fileList) {
			this.fileList11 = fileList;
			this.file = file;
			this.fileCheck = fileList
			console.log(file)
		},
		handleChange12(file, fileList) {
			this.fileList12 = fileList;
			this.file = file;
			this.fileCheck = fileList
			console.log(file)
		},
	}
}
</script>

<style scoped>
	.el-form-item{
		width: 50%;
		float: left;
	}
	.edit-input{
		width: 175px;
	}
	.fl{
		float: left;
	}
	/* 清理浮动 */
	.clearfix:before, .clearfix:after {
		content: "";
		display: table;
	}
	.clearfix:after {
		clear: both;
	}
	.clearfix {
		zoom: 1;
	}
	.handleBtn{
		color: #1890FF;
		font-size: 14px;
	}
	.el-select{
		width: 100% !important;
	}
		
<style>

