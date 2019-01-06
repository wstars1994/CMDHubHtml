<template>
	<div>
		<header>
			<el-menu :default-active="activeIndex" class="el-menu-header" mode="horizontal" active-text-color="#409eff">
				<el-menu-item index="1">首页</el-menu-item>
				<el-menu-item index="2">贡献</el-menu-item>
				<el-menu-item index="3">API</el-menu-item>
				<el-menu-item class="leave-msg" index="6" ><i class="el-icon-tickets"></i>关于</el-menu-item>
				<el-menu-item class="leave-msg" index="4" ><i class="el-icon-edit"></i>留言</el-menu-item>
			</el-menu>
		</header>
		<div id="app">
			<router-view/>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data(){
			return {
				activeIndex:"1"
			}
		}
	}
</script>

<style>
	html{
		height: 100%;
	}
	body {
		margin: 0;
		padding: 0;
	}
	header{
		width:100%;
		background-color:#fff;
		border-bottom: solid 1px #e6e6e6;
	}
	header .el-menu-header{
		margin: 0 auto;
		max-width: 1200px;
		border-bottom:none !important
	}
	header .leave-msg{
		float: right !important;
	}
	header .is-active{
		
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		max-width: 1200px;
		margin: 0 auto;
	}
</style>