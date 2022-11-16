<template lang="">
    <div class="flex flex-col justify-center items-center">
        <div id="app" ref="document">
    <div id="element-to-convert" class="border-2 border-black">
        <img width="400" src="./../assets/home.png" />
        <button @click="exportToPDF" class="bg-blue-300 p-4 rounded">Export to PDF</button>
        <input type="text" placeholder="okay" class="border-2 border-black">
    </div>
  </div>
    </div>
    
</template>

<script>

import html2pdf from "html2pdf.js";
export default {
    name: 'downloadPdf',
	methods: {
		exportToPDF() {
            html2pdf(document.getElementById("element-to-convert"), {margin: 0,filename: "i-was-html3.pdf",});
    },
	},
}
</script>
<style lang="css">
    *{
        line-height: 120% !important;
    }
</style>