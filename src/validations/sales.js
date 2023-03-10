const { z } = require("zod");

exports.salesValidation = z.object({
  product: z.string(),
  date_purchase: z.string(),
  productvalue_purchase: z.number(),
  unity_purchase: z.number(),
  total_money_purchase: z.number(),
})

exports.updateSalesValidation = z.object({
  date_sale: z.string(),
  productvalue_sale: z.number(),
  unity_sale: z.number(),
  total_money_sale: z.number(),
  profit: z.number(),
})