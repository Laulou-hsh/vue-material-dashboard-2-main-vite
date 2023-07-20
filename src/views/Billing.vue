<template>
  <div class="container-fluid mt-4">
    <div class="row align-items-center">
      <div class="col-lg-4 col-sm-8">
        <nav-pill />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8">
        <div class="row mt-4">
          <div class="col-xl-6 mb-xl-0 mb-4">
            <master-card />
          </div>
          <div class="col-xl-6">
            <div class="row">
              <default-info-card
                v-for="{icon, title, description, value} of DefaultInfoCardData"
                :key="title"
                :icon="icon"
                :title="title"
                :description="description"
                :value="value"
              />
            </div>
          </div>
          <div class="col-md-12 mb-4">
            <payment-card />
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <invoice-card />
      </div>
    </div>
    <div class="row">
      <div class="col-md-7">
        <billing-card />
      </div>
      <div class="col-md-5">
        <transaction-card />
      </div>
    </div>
  </div>
</template>

<script setup>
import NavPill from './components/NavPill/NavPill.vue'
import MasterCard from '@/examples/Cards/MasterCard.vue'
import DefaultInfoCard from './components/DefaultInfoCard/DefaultInfoCard.vue'
import DefaultInfoData from './components/DefaultInfoCard/DefaultInfoCardData.json'
import PaymentCard from './components/PaymentCard/PaymentCard.vue'
import InvoiceCard from './components/InvoiceCard/InvoiceCard.vue'
import BillingCard from './components/BillingCard/BillingCard.vue'
import TransactionCard from './components/TransactionCard/TransactionCard.vue'

const DefaultInfoCardData = DefaultInfoData.data
</script>
