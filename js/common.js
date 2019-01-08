Vue.component('ch-header', {
  data: function () {
    return {
      activeIndex: "1"
    }
  },
  template: '<header>'+
	  			'<el-menu :default-active="activeIndex" class="el-menu-header" mode="horizontal" active-text-color="#409eff">'+
		  			'<el-menu-item index="1"><i class="el-icon-menu"></i>首页</el-menu-item>'+
					'<el-menu-item index="2"><i class="el-icon-plus"></i>贡献</el-menu-item>'+
					'<el-menu-item index="3"><i class="el-icon-share"></i>API</el-menu-item>'+
					'<el-menu-item class="leave-msg" index="6"><i class="el-icon-tickets"></i>关于</el-menu-item>'+
					'<el-menu-item class="leave-msg" index="4"><i class="el-icon-edit"></i>留言</el-menu-item>'+
				'</el-menu>'+
			'</header>'
});