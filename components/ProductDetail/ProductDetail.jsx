'use client'
import React from 'react';
import { Box, Coffee, Power, Timer, Star, Building2, Droplet, Gauge, Cpu, Settings, Info, CheckCircle, ArrowRight, Thermometer, PenTool as Tool, Monitor, Zap } from 'lucide-react';

function ProductDetail({ product, handleWhatsAppInquiry }) {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#3D1808] to-[#2a1106] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">{product.category}</span>
                  <span className="text-white/60">•</span>
                  <span className="text-white/60">{product.sku}</span>
                </div>
                <h1 className="text-4xl font-bold">{product.name}</h1>
                <p className="text-white/80 text-lg leading-relaxed">{product.description}</p>
                <button
                  onClick={() => handleWhatsAppInquiry(product.name)}
                  className="mt-6 bg-white text-[#3D1808] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                >
                  Get Quote
                  <Star size={20} />
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white/5 p-8">
                <img
                  src={`/productImage/${product.img}`}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Perfect For Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Perfect For</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.perfect_for.map((item, index) => (
              <div key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow p-6 rounded-xl text-center">
                <Building2 className="text-[#3D1808] mx-auto mb-3" size={24} />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(product.key_features).map(([key, value], index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#3D1808]/5 rounded-lg">
                    <Star className="text-[#3D1808]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h3>
                    <p className="text-gray-600">{value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specifications Tabs */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Technical Specifications</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Basic Specs */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#3D1808]/5 rounded-lg">
                  <Coffee className="text-[#3D1808]" size={24} />
                </div>
                <div>
                  <p className="text-gray-600">Drink Options</p>
                  <p className="font-semibold text-gray-900">{product.technical_specifications.drink_option}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#3D1808]/5 rounded-lg">
                  <Droplet className="text-[#3D1808]" size={24} />
                </div>
                <div>
                  <p className="text-gray-600">Boiler Capacity</p>
                  <p className="font-semibold text-gray-900">
                    Top: {product.technical_specifications.boiler_capacity.bubble_top}<br />
                    Floor: {product.technical_specifications.boiler_capacity.bubble_floor}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#3D1808]/5 rounded-lg">
                  <Gauge className="text-[#3D1808]" size={24} />
                </div>
                <div>
                  <p className="text-gray-600">Dispensing Rate</p>
                  <p className="font-semibold text-gray-900">{product.technical_specifications.dispensing_rate}</p>
                </div>
              </div>
            </div>

            {/* Motor Specs */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#3D1808]/5 rounded-lg">
                  <Cpu className="text-[#3D1808]" size={24} />
                </div>
                <div>
                  <p className="text-gray-600">Gear Motor</p>
                  <p className="font-semibold text-gray-900">
                    {product.technical_specifications.gear_motor.number} Motors<br />
                    {product.technical_specifications.gear_motor.rpm}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#3D1808]/5 rounded-lg">
                  <Settings className="text-[#3D1808]" size={24} />
                </div>
                <div>
                  <p className="text-gray-600">Mixing Motor</p>
                  <p className="font-semibold text-gray-900">
                    {product.technical_specifications.mixing_motor.number} Motors<br />
                    {product.technical_specifications.mixing_motor.rpm}
                  </p>
                </div>
              </div>
            </div>

            {/* Dimensions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#3D1808]/5 rounded-lg">
                  <Box className="text-[#3D1808]" size={24} />
                </div>
                <div>
                  <p className="text-gray-600">Dimensions (W x D x H)</p>
                  <p className="font-semibold text-gray-900">
                    {product.unit_specifications.unpacked_dimensions.width} x{' '}
                    {product.unit_specifications.unpacked_dimensions.depth} x{' '}
                    {product.unit_specifications.unpacked_dimensions.height}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#3D1808]/5 rounded-lg">
                  <Info className="text-[#3D1808]" size={24} />
                </div>
                <div>
                  <p className="text-gray-600">Weight</p>
                  <p className="font-semibold text-gray-900">
                    Net: {product.unit_specifications.net_weight}<br />
                    Gross: {product.unit_specifications.gross_weight}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="mt-8 p-6 bg-[#3D1808]/5 rounded-xl">
            <h3 className="font-semibold text-gray-900 mb-4">Additional Features</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {product.technical_specifications.cup_count_feature && (
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-[#3D1808]" size={20} />
                  <span className="text-gray-700">{product.technical_specifications.cup_count_feature}</span>
                </div>
              )}
              {product.technical_specifications.beverage_temperature_setting && (
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-[#3D1808]" size={20} />
                  <span className="text-gray-700">{product.technical_specifications.beverage_temperature_setting}</span>
                </div>
              )}
              {product.technical_specifications.rinse && (
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-[#3D1808]" size={20} />
                  <span className="text-gray-700">{product.technical_specifications.rinse}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;