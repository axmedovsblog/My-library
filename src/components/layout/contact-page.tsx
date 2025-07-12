"use client"

import type React from "react"
import { useState } from "react"
import type { JSX } from "react/jsx-runtime"
import { useLanguage } from "../../contexts/language-context"
import type { ContactForm } from "../../types"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

import L from "leaflet"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

// Leaflet marker icon fix
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png"
import markerIcon from "leaflet/dist/images/marker-icon.png"
import markerShadow from "leaflet/dist/images/marker-shadow.png"

delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
	iconRetinaUrl: markerIcon2x,
	iconUrl: markerIcon,
	shadowUrl: markerShadow,
})

const initialFormData: ContactForm = {
	name: "",
	phone: "",
	message: "",
}

export function ContactPage(): JSX.Element {
	const [formData, setFormData] = useState<ContactForm>(initialFormData)
	const { t } = useLanguage()

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	): void => {
		const { name, value } = e.target
		setFormData((prev: ContactForm) => ({
			...prev,
			[name]: value,
		}))
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault()
		console.log("Form submitted:", formData)
		// Handle form submission logic here
		setFormData(initialFormData)
	}

	return (
		<div className="min-h-screen">
			<div className="container mx-auto px-[100px] bg-none">
				<div className="grid lg:grid-cols-2 gap-8">
					{/* Map and Location */}
					<Card className="!py-0 !m-0 overflow-hidden">
						<CardContent className="!p-0 !m-0 relative">
							<div className="relative text-center h-full">
								{/* Title */}
								<div className="absolute top-4 left-[68px] z-20">
									<h3 className="text-[35px] font-semibold text-gray-800 pt-[20px]">{t.about.location}</h3>
								</div>
								{/* Map container */}
								<div className="w-full h-[500px] lg:h-[500px] relative z-10">
									<MapContainer
										center={[41.3111, 69.2797]}
										zoom={13}
										scrollWheelZoom={false}
										className="w-full h-full"
										style={{ height: "100%", width: "100%" }}
									>
										<TileLayer
											attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
											url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
										/>
										<Marker position={[41.3111, 69.2797]}>
											<Popup>Toshkent markazi</Popup>
										</Marker>
									</MapContainer>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Contact Form */}
					<Card className="bg-[#1E3A8A] !p-0">
						<CardContent className="!px-[66px] py-[20px]">
							<div className="text-white rounded-lg text-center">
								<h3 className="font-semibold text-[40px] pb-[10px]">
									{t.about.contactForm.title}
								</h3>
								<p className="text-[28px] font-semibold pb-[20px]">{t.about.contactForm.subtitle}</p>
							</div>

							<form onSubmit={handleSubmit} className="space-y-5">
								<div>
									<Input
										id="name"
										name="name"
										className='bg-[#FFFFFF]'
										value={formData.name}
										onChange={handleInputChange}
										placeholder={t.about.contactForm.namePlaceholder}
										required
									/>
								</div>
								<div>
									<Input
										id="phone"
										name="phone"
										className='bg-[#FFFFFF]'
										value={formData.phone}
										onChange={handleInputChange}
										placeholder={t.about.contactForm.phonePlaceholder}
										required
									/>
								</div>
								<div>
									<Textarea
										id="message"
										name="message"
										className='bg-[#FFFFFF]'
										value={formData.message}
										onChange={handleInputChange}
										placeholder={t.about.contactForm.messagePlaceholder}
										rows={4}
										required
									/>
								</div>
								<Button
									type="submit"
									className="w-full bg-[#098C81] hover:bg-green-700"
								>
									{t.about.contactForm.submit}
								</Button>
							</form>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}
