<template>
	<a-tooltip placement="bottomRight">
        <template slot="title">
        Grid View: This feature is available in Pro version.
        </template>
        <a-button class="cf7d-theme-horizontal-bt" disabled>
			<a-icon style="font-size: 16px;" type="appstore" />
		</a-button>
    </a-tooltip>
	
</template>

<script>

export default {
}
</script>

<style scoped>
.cf7d-theme-horizontal-bt {
    line-height: 34px;
	width: 34px;
	height: 34px;
	padding: 0;
}
.cf7d-theme-horizontal-bt:active {
    color: #0f729f;
}
</style>
