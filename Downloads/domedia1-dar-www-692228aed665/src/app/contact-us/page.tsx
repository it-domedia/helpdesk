"use client";
import Ad300x250 from "@/app/components/Ad300x250";

import Container from "@/app/components/Container";
import ContactForm from "@/app/components/ContactForm";
import AdBannerItem from "@/app/components/ads/AdBannerItem";
import Titles from "@/app/components/Titles";
import AdBannerGrid from "../components/ads/AdBannerGrid";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
	return (
		<Container className="my-6">
			<Titles.Title text="تواصل معنا" className="text-center my-6" />

			<section className="max-w-screen-md mx-auto space-y-10">
				{/* الفورم */}
				<ContactForm />

				{/* Ads */}
				<AdBannerGrid />
				<div className="flex my-24">

					<div className="flex-1/3">

					</div>
				</div>
			</section>
		</Container>
	);
}
