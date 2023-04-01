<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {


    return {}
  }
})
</script>

<style >
table caption {
  background: black;
  color: white;
  padding: 10px;
  caption-side: top;
}

.table {
  display: table;
  border: solid 1px #ddd;
}

.table nav {
  display: table-caption;
  text-align: center;
  background: black;
  color: white;
  padding: 10px;
}

.table section:nth-of-type(1) {
  font-weight: bold;
  display: table-header-group;
  background: #555;
  color: white;
}

.table section:nth-of-type(2) {
  display: table-row-group;
}

.table section:nth-of-type(3) {
  display: table-footer-group;
  background: #f3f3f3;
}

.table section ul {
  display: table-row;
}

.table section ul li {
  padding: 10px;
  display: table-cell;
  border: solid 1px #ddd;
}

.box table tr {
  color: white;
}

.box table tr:nth-child(odd) {
  background: red;
}

.box table tr td:nth-child(even) {
  background: #067db4;
}

.boxs table  tr {
  background: #118d68;
  color: #fff;
}

.boxs table tr:nth-child(odd) {
  background: #1bb385;
  color: white;
}
.table table {
  border-collapse: collapse;
}
 .hide table {
      empty-cells: hide;
  }



   .none table {
            border: none;
            border-collapse: collapse;
        }

      .none   table td {
            border: none;
            border-right: solid 1px #ddd;
            border-bottom: solid 1px #ddd;
        }

       .none  table tr:first-child td {
            border-top: solid 1px #ddd;
        }

       .none  table td:last-child {
            border-right: none;
        }




         .data table,
        .data td {
            border: none;
            font-size: 14px;
            border-collapse: collapse;
        }

       .data table tr:hover {
            background: #ddd;
            cursor: pointer;
        }

       .data table td {
            border-top: solid 1px #ccc;
            padding: 10px;
        }
</style>