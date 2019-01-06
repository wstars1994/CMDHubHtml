<template>
	<div class="container">
		<el-row :gutter="20">
			<el-col :span="12" :offset="6">
				<el-input v-model="input" class="search-input" placeholder="输入查询内容" :suffix-icon="searchIcon" clearable></el-input>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="3" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
				<el-card shadow="never" :body-style="{ padding: '0px' }">
					<img src="../assets/windows.jpg" class="image">
					<div style="padding: 8px;">
						<span>Windows</span>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'index',
		data() {
			return {
				input: '',
				searchIcon: 'el-icon-search'
			}
		},
		methods: {}
	}
</script>
<style>
.container {
	padding-top: 10px;
}

.container .search-input .el-input__inner {
	height: 45px !important
}


.image {
	width: 100%;
	display: block;
}

.clearfix:before,
.clearfix:after {
	display: table;
	content: "";
}

.clearfix:after {
	clear: both
}
</style>