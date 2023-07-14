<template>
  <div class="card">
    <div class="card-header pb-0 px-3">
      <h6 class="mb-0">Billing Information</h6>
    </div>
    <div class="card-body pt-4 p-3">
      <ul class="list-group">
        <billing-card-item
          v-for="(item, index) in BillingData"
          :key="index"
          :isFirst="index === 0"
          :name="item.name"
          :companyName="item.companyName"
          :emailAddress="item.emailAddres"
          :VATNumber="item.VATNumber"
        />
      </ul>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import BillingCardItem from './BillingCardItem.vue'
import {data} from './BillingData.json'
const BillingData = ref(data)
</script>
