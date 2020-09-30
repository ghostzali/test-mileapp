// packages-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'packages';
  const mongooseClient = app.get('mongooseClient');
  const uuid = require('uuid');
  const { Schema } = mongooseClient;

  const Connote = new Schema({
    _id: {type: String, default: () => uuid.v4()},
    connote_id: {type: String},
    connote_number: {type: Number},
    connote_service: {type: String},
    connote_service_price: {type: Number},
    connote_amount: {type: Number},
    connote_code: {type: String},
    connote_booking_code: { type: String, default: null },
    connote_order: {type: Number},
    connote_state: {type: String},
    connote_state_id: {type: Number},
    zone_code_from: {type: String},
    zone_code_to: {type: String},
    surcharge_amount: {type: Number, default: null},
    transaction_id: {type: String},
    actual_weight: {type: Number},
    volume_weight: {type: Number},
    chargeable_weight: {type: Number},
    organization_id: {type: Number},
    location_id: {type: String},
    connote_total_package: {type: Number},
    connote_surcharge_amount: {type: Number},
    connote_sla_day: {type: Number},
    location_name: {type: String},
    location_type: {type: String},
    source_tariff_db: {type: String},
    id_source_tariff: {type: Number},
    pod: {type: Number, default: null},
    history: {type: [String], default: []}
  }, { timestamps: true });

  const Address = {
    customer_name: {type: String},
    customer_address: {type: String},
    customer_email: {type: String, trim: true, lowercase: true, match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']},
    customer_phone: {type: String, lowercase: true, match: [/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/g, 'Please fill a valid phone number']},
    customer_address_detail: {type: String, default: null},
    customer_zip_code: {type: String},
    zone_code: {type: String},
    organization_id: {type: Number},
    location_id: {type: String}
  };

  const Koli = new Schema({
    _id: {type: String, default: () => uuid.v4() },
    koli_id: {type: String},
    koli_code: {type: String},
    koli_length: {type: Number},
    awb_url: {type: String},
    koli_chargeable_weight: Number,
    koli_width: {type: Number},
    koli_surcharge: {type: [Number], default: []},
    koli_height: {type: Number},
    koli_description: {type: String},
    koli_formula_id: {type: String, default: null},
    connote_id: {type: String, required: true},
    koli_volume: {type: Number},
    koli_weight: {type: Number},
    koli_custom_field: {
      awb_sicepat: {type: String, default: null},
      harga_barang: {type: Number, default: null}
    }
  }, { timestamps: true });

  const Package = new Schema({
    _id: {type: String, default: () => uuid.v4()},
    transaction_id: { type: String, required: true, unique: true },
    customer_name: { type: String, required: true },
    customer_code: { type: String, required: true },
    transaction_amount: { type: Number, required: true, min: 0 },
    transaction_discount: { type: Number, max: 100, default: 0 },
    transaction_additional_field: { type: String, default: '' },
    transaction_payment_type: { type: String, required: true },
    transaction_state: { type: String, required: true },
    transaction_code: { type: String, required: true },
    transaction_order: { type: Number, required: true },
    location_id: { type: String, required: true },
    organization_id: { type: Number, required: true },
    transaction_payment_type_name: { type: String, required: true },
    transaction_cash_amount: { type: Number, default: 0 },
    transaction_cash_change: { type: Number, default: 0 },
    connote_id: { type: String, required: true },
    customer_attribute: {
      Nama_Sales: { type: String, required: true },
      TOP: { type: String, required: true },
      Jenis_Pelanggan: { type: String, required: true }
    },
    connote: {type: Connote},
    origin_data: {type: Address},
    destination_data: {type: Address},
    koli_data: [Koli],
    custom_field: {
      catatan_tambahan: {type: String, default: ''}
    },
    currentLocation: {
      name: {type: String, default: ''},
      code: {type: String, default: ''},
      type: {type: String, default: ''}
    }
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, Package);

};
