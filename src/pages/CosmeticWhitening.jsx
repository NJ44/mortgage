import React from 'react'
import { Link } from 'react-router-dom'
import { config } from '../config'

const CosmeticWhitening = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=600&fit=crop"
            alt="Cosmetic & Whitening"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Cosmetic & Whitening
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-4">
            A beautiful, confident smile can transform your appearance and boost your self-esteem. At {config.BUSINESS_NAME}, our cosmetic dentistry services are designed to help you achieve the smile of your dreams through advanced techniques and personalized treatment plans. Whether you're looking to brighten your teeth, correct imperfections, or completely transform your smile, our experienced cosmetic dentists have the expertise and artistic vision to deliver stunning results that look natural and enhance your unique features.
          </p>

          <p className="mb-4">
            Professional teeth whitening is one of the most popular cosmetic dental procedures, and for good reason. Over time, our teeth naturally become discolored due to aging, consumption of staining foods and beverages, smoking, and other factors. Our in-office whitening treatments use professional-grade bleaching agents that are far more effective than over-the-counter products, delivering dramatic results in just one visit. For patients who prefer the convenience of at-home treatment, we also offer custom-fitted whitening trays with professional-grade gel that you can use in the comfort of your own home, allowing you to whiten your teeth at your own pace.
          </p>

          <p className="mb-4">
            Dental veneers represent the gold standard in cosmetic dentistry for transforming smiles. These thin, custom-made shells are bonded to the front surface of your teeth, effectively covering imperfections such as chips, cracks, gaps, discoloration, or misalignment. Made from high-quality porcelain or composite materials, veneers are designed to match the natural translucency and color of your teeth, creating a seamless, beautiful appearance. The process involves careful planning and precise placement to ensure your new smile looks completely natural while dramatically improving your appearance.
          </p>

          <p className="mb-4">
            For patients seeking a complete smile makeover, we offer comprehensive cosmetic treatment planning that addresses multiple aspects of your smile. This may include a combination of whitening, veneers, bonding, gum contouring, and orthodontic treatment to create a harmonious, balanced result. Our cosmetic dentists work closely with you to understand your goals and develop a treatment plan that achieves the smile you've always wanted while maintaining the health and function of your teeth.
          </p>

          <p className="mb-4">
            Dental bonding is another versatile cosmetic procedure that can quickly and affordably address minor imperfections. Using tooth-colored composite resin, we can repair chips, close small gaps, reshape teeth, and cover stains. The bonding material is carefully sculpted and polished to blend seamlessly with your natural teeth, and the entire procedure can often be completed in a single visit. While bonding may not be as durable as veneers, it provides an excellent solution for minor cosmetic concerns and can be easily maintained or replaced as needed.
          </p>

          <p className="mb-6">
            At {config.BUSINESS_NAME}, we believe that everyone deserves to feel confident about their smile. Our cosmetic dentistry services combine artistic skill with advanced dental technology to deliver results that exceed expectations. We take the time to understand your vision, discuss all available options, and create a treatment plan that fits your lifestyle and budget. Whether you're preparing for a special event or simply want to improve your everyday confidence, our cosmetic dentistry services can help you achieve a smile that you'll be proud to share. Contact us today to schedule a cosmetic consultation and discover how we can transform your smile.
          </p>
        </div>

        <div className="mt-8">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              const element = document.querySelector('#contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
          >
            Book a Consultation
          </a>
        </div>

        {/* Services Section */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Cosmetic & Whitening Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=300&fit=crop"
                alt="Teeth Whitening"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Teeth Whitening</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Professional teeth whitening is one of the most popular and effective ways to dramatically brighten your smile. Over time, our teeth naturally become discolored due to aging, consumption of staining foods and beverages like coffee, tea, and wine, smoking, and other factors. Our in-office whitening treatments use professional-grade bleaching agents that are far more effective than over-the-counter products, delivering dramatic results in just one visit. The procedure is safe, comfortable, and supervised by our experienced dental team to ensure optimal results. For patients who prefer the convenience of at-home treatment, we also offer custom-fitted whitening trays with professional-grade gel that you can use in the comfort of your own home, allowing you to whiten your teeth at your own pace. We take impressions of your teeth to create trays that fit perfectly, ensuring even whitening and preventing gel from irritating your gums. Both in-office and at-home whitening options can lighten your teeth by several shades, giving you a noticeably brighter, more youthful smile. We'll discuss your goals and lifestyle to recommend the best whitening option for you, and provide guidance on maintaining your results long-term.
                </p>
                <Link
                  to="/cosmetic-whitening/teeth-whitening"
                  className="inline-block bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=300&fit=crop"
                alt="Dental Veneers"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dental Veneers</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dental veneers represent the gold standard in cosmetic dentistry for transforming smiles. These thin, custom-made shells are bonded to the front surface of your teeth, effectively covering imperfections such as chips, cracks, gaps, discoloration, or misalignment. Made from high-quality porcelain or composite materials, veneers are designed to match the natural translucency and color of your teeth, creating a seamless, beautiful appearance that looks completely natural. The veneer process begins with a comprehensive consultation where we discuss your goals and examine your teeth to determine if veneers are the right solution for you. We then prepare your teeth by removing a small amount of enamel to make room for the veneers, take detailed impressions, and send them to a skilled dental laboratory where your custom veneers are crafted. During the fabrication period, temporary veneers protect your prepared teeth. Once your permanent veneers are ready, we carefully bond them to your teeth using a strong adhesive, ensuring perfect fit and alignment. The result is a dramatically improved smile that can last for many years with proper care. Veneers are stain-resistant and durable, making them an excellent long-term investment in your smile's appearance.
                </p>
                <Link
                  to="/cosmetic-whitening/dental-veneers"
                  className="inline-block bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=300&fit=crop"
                alt="Dental Bonding"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dental Bonding</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dental bonding is a versatile and affordable cosmetic procedure that can quickly address minor imperfections in your smile. Using tooth-colored composite resin, we can repair chips, close small gaps, reshape teeth, cover stains, and improve the overall appearance of your teeth. The bonding material is carefully selected to match your natural tooth color and translucency, then sculpted and polished to blend seamlessly with your existing teeth. The procedure is typically completed in a single visit and requires minimal preparation of the tooth surface. We begin by selecting the perfect shade of composite resin to match your natural teeth, then apply a conditioning liquid to help the bonding material adhere. The resin is applied, shaped, and hardened with a special light, then polished to a natural-looking finish. Dental bonding is an excellent solution for minor cosmetic concerns and can be easily maintained or replaced as needed. While bonding may not be as durable as veneers, it provides an effective and affordable way to improve your smile's appearance without the need for extensive tooth preparation. The procedure is comfortable, quick, and can make a significant difference in your smile's appearance.
                </p>
                <Link
                  to="/cosmetic-whitening/dental-bonding"
                  className="inline-block bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=300&fit=crop"
                alt="Smile Makeover"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Smile Makeover</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A complete smile makeover is a comprehensive cosmetic treatment plan that addresses multiple aspects of your smile to create a harmonious, balanced, and beautiful result. This personalized approach combines various cosmetic procedures including whitening, veneers, bonding, gum contouring, and sometimes orthodontic treatment to achieve your dream smile. The process begins with an in-depth consultation where we discuss your goals, examine your current smile, and use digital imaging to show you potential results. We consider factors such as your facial features, skin tone, lip shape, and personal preferences to design a smile that enhances your natural beauty. Our cosmetic dentists work closely with you throughout the process, explaining each step and ensuring you're comfortable with the treatment plan. A smile makeover may involve multiple visits over several months, but the transformation can be truly remarkable. We use advanced technology including digital smile design to plan your makeover and ensure optimal results. Whether you're preparing for a special event or simply want to improve your everyday confidence, a smile makeover can give you the beautiful, natural-looking smile you've always wanted. The investment in a smile makeover can significantly boost your self-esteem and improve your quality of life.
                </p>
                <Link
                  to="/cosmetic-whitening/smile-makeover"
                  className="inline-block bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CosmeticWhitening

