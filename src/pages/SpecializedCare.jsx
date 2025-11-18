import React from 'react'
import { Link } from 'react-router-dom'
import { config } from '../config'

const SpecializedCare = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1200&h=600&fit=crop"
            alt="Specialized Care"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Specialized Care
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-4">
            At {config.BUSINESS_NAME}, we recognize that some dental conditions require specialized expertise and advanced treatment approaches. Our specialized care services encompass a comprehensive range of advanced dental procedures designed to address complex oral health issues and restore optimal function and aesthetics. From dental implants that replace missing teeth to emergency care that provides immediate relief, our team of skilled specialists is equipped with the latest technology and techniques to deliver exceptional results for even the most challenging cases.
          </p>

          <p className="mb-4">
            Dental implants represent one of the most significant advances in modern dentistry, offering a permanent solution for missing teeth that closely mimics the look, feel, and function of natural teeth. Unlike traditional bridges or dentures, implants are surgically placed into the jawbone, where they fuse with the bone tissue through a process called osseointegration. This creates a stable foundation for replacement teeth that can last a lifetime with proper care. Our implant specialists have extensive training and experience in implant placement, working closely with each patient to develop personalized treatment plans that consider their unique oral anatomy, bone density, and aesthetic goals. We use only the highest quality implant systems and work with skilled dental laboratories to create custom crowns, bridges, or dentures that perfectly match your natural teeth.
          </p>

          <p className="mb-4">
            Root canal therapy, often misunderstood as a painful procedure, is actually a highly effective treatment that saves infected or severely damaged teeth from extraction. Modern root canal techniques have made this procedure much more comfortable than in the past, and our endodontic specialists use advanced equipment and anesthesia to ensure your comfort throughout the process. During a root canal, we remove the infected or damaged pulp from inside the tooth, thoroughly clean and disinfect the root canals, and then seal them to prevent reinfection. This treatment allows you to keep your natural tooth, which is always preferable to extraction, as it maintains your jawbone health and prevents the need for more extensive replacement procedures.
          </p>

          <p className="mb-4">
            Emergency dental care is available for patients experiencing sudden pain, trauma, or other urgent dental issues. We understand that dental emergencies can happen at any time, and we're committed to providing prompt, effective care when you need it most. Our emergency services include treatment for severe toothaches, knocked-out or broken teeth, lost fillings or crowns, abscesses, and other urgent conditions. We maintain flexible scheduling to accommodate emergency patients and work quickly to diagnose and treat the problem, providing immediate relief and preventing further complications. Our team is trained to handle a wide range of dental emergencies with compassion and efficiency, ensuring you receive the care you need when every minute counts.
          </p>

          <p className="mb-4">
            Orthodontic treatment has evolved significantly in recent years, and we offer both traditional braces and modern clear aligner systems to straighten teeth and correct bite issues. Whether you're a teenager or an adult seeking orthodontic treatment, our orthodontic specialists will evaluate your specific needs and recommend the most appropriate treatment option. Traditional metal braces remain highly effective for complex cases, while clear aligners offer a more discreet alternative for many patients. We also provide retainers and follow-up care to ensure your results are maintained long-term. Orthodontic treatment not only improves the appearance of your smile but also enhances oral function and makes teeth easier to clean, reducing your risk of cavities and gum disease.
          </p>

          <p className="mb-6">
            Periodontal treatment addresses gum disease, a common condition that affects the tissues supporting your teeth. Left untreated, gum disease can lead to tooth loss and has been linked to other serious health conditions. Our periodontal specialists provide comprehensive gum disease treatment, from non-surgical deep cleanings to advanced surgical procedures when necessary. We work with patients to develop effective home care routines and provide ongoing maintenance to prevent disease recurrence. Our goal is to restore and maintain healthy gums that support your teeth for a lifetime. At {config.BUSINESS_NAME}, our specialized care services reflect our commitment to providing comprehensive, advanced dental treatment that addresses even the most complex oral health needs. Contact us to learn more about how our specialized services can help you achieve optimal oral health.
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
            Schedule a Consultation
          </a>
        </div>

        {/* Services Section */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Specialized Care Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=300&fit=crop"
                alt="Dental Implants"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dental Implants</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dental implants represent one of the most significant advances in modern dentistry, offering a permanent solution for missing teeth that closely mimics the look, feel, and function of natural teeth. Unlike traditional bridges or dentures, implants are surgically placed into the jawbone, where they fuse with the bone tissue through a process called osseointegration. This creates a stable foundation for replacement teeth that can last a lifetime with proper care. The implant process typically involves multiple stages, beginning with a comprehensive evaluation to assess your bone density and oral health. If needed, bone grafting may be performed to ensure adequate support for the implant. Once the implant is placed, a healing period allows the bone to integrate with the implant. After healing, an abutment is attached to the implant, and a custom crown, bridge, or denture is fabricated to complete the restoration. Our implant specialists have extensive training and experience in implant placement, working closely with each patient to develop personalized treatment plans. We use only the highest quality implant systems and work with skilled dental laboratories to create restorations that perfectly match your natural teeth. Dental implants not only restore your smile but also preserve jawbone health and prevent the shifting of adjacent teeth.
                </p>
                <Link
                  to="/specialized-care/dental-implants"
                  className="inline-block bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&h=300&fit=crop"
                alt="Emergency Care"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Care</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dental emergencies can happen at any time, and we're committed to providing prompt, effective care when you need it most. Whether you're experiencing severe toothache, have knocked out or broken a tooth, lost a filling or crown, or have an abscess, our emergency dental services are designed to provide immediate relief and prevent further complications. We understand that dental emergencies can be painful and stressful, which is why we maintain flexible scheduling to accommodate urgent cases. Our team is trained to handle a wide range of dental emergencies with compassion and efficiency, ensuring you receive the care you need when every minute counts. Common dental emergencies we treat include severe toothaches, dental trauma, knocked-out teeth, broken or chipped teeth, lost fillings or crowns, abscesses, and other urgent conditions. When you call with a dental emergency, we'll assess your situation and provide guidance on immediate steps you can take before arriving at our office. We work quickly to diagnose and treat the problem, providing immediate relief and preventing further complications. Our goal is to get you out of pain as quickly as possible while preserving your oral health and preventing the need for more extensive treatment later.
                </p>
                <Link
                  to="/specialized-care/emergency-care"
                  className="inline-block bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=300&fit=crop"
                alt="Orthodontics"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Orthodontics</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Orthodontic treatment has evolved significantly in recent years, and we offer both traditional braces and modern clear aligner systems to straighten teeth and correct bite issues. Whether you're a teenager or an adult seeking orthodontic treatment, our orthodontic specialists will evaluate your specific needs and recommend the most appropriate treatment option. Traditional metal braces remain highly effective for complex cases, providing precise control over tooth movement and the ability to address severe misalignments. Modern braces are smaller and more comfortable than ever before, and we offer ceramic braces that blend with your teeth for a more discreet appearance. Clear aligner systems offer a nearly invisible alternative for many patients, allowing you to straighten your teeth without the appearance of traditional braces. These custom-made, removable aligners gradually move your teeth into the desired position, and you can remove them for eating, brushing, and special occasions. Orthodontic treatment not only improves the appearance of your smile but also enhances oral function, makes teeth easier to clean, and reduces your risk of cavities and gum disease. We provide retainers and follow-up care to ensure your results are maintained long-term, helping you enjoy your beautiful, straight smile for years to come.
                </p>
                <Link
                  to="/specialized-care/orthodontics"
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
                alt="Periodontal Treatment"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Periodontal Treatment</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Periodontal treatment addresses gum disease, a common condition that affects the tissues supporting your teeth. Left untreated, gum disease can lead to tooth loss and has been linked to other serious health conditions including heart disease, diabetes, and respiratory problems. Our periodontal specialists provide comprehensive gum disease treatment, from non-surgical deep cleanings to advanced surgical procedures when necessary. The treatment approach depends on the severity of your condition, and we begin with a thorough evaluation to assess the extent of the disease. For early-stage gum disease, we provide scaling and root planing, which involves deep cleaning below the gumline to remove plaque and tartar, and smoothing the root surfaces to promote healing. We may also use antimicrobial treatments to eliminate bacteria and promote gum health. For more advanced cases, we offer advanced periodontal therapies including laser treatment, which can remove diseased tissue while promoting regeneration of healthy gum tissue. Surgical procedures may be necessary for severe cases to restore gum health and prevent further damage. We work closely with patients to develop effective home care routines and provide ongoing maintenance to prevent disease recurrence. Regular periodontal maintenance visits are essential for managing gum disease and preventing its progression.
                </p>
                <Link
                  to="/specialized-care/periodontal-treatment"
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

export default SpecializedCare

