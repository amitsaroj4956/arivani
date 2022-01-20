<template>
    <a-tooltip placement="bottom">
        <template slot="title">
        Export to CSV: This feature is available in Pro version.
        </template>
        <a-button class="cf7d-export-to-csv" disabled>
            <a-icon style="color: rgba(0, 0, 0, 0.25)" type="download" />
        </a-button>
    </a-tooltip>
    
</template>

<script>
export default {

}
</script>

<style scoped>
.cf7d-export-to-csv {
    margin-right: 5px;
    margin-left: 5px;
    border-radius: 3px;
    height: 34px;
    line-height: 34px;
    vertical-align: -0.0625em;
    color: #1a2a37;
}
.cf7d-export-to-csv:hover,.cf7d-export-to-csv:focus {
    color: #1a2a37;
}
</style>
