"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ExternalLink,
  Phone,
  MapPin,
  Users,
  Trophy,
  Calendar,
  DollarSign,
  Mic,
  Shirt,
  PenTool,
  BookOpen,
  MSquare as Mosque,
  Target,
  Volume2,
} from "lucide-react"

export function ContentSections() {
  const competitions = [
    { name: "Pidato Islami", icon: Mic, description: "Lomba pidato dengan tema keislaman" },
    { name: "Busana Muslim", icon: Shirt, description: "Fashion show busana muslim modern" },
    { name: "Kaligrafi", icon: PenTool, description: "Seni menulis kaligrafi Arab"},
    { name: "MHQ", icon: BookOpen, description: "Musabaqah Hifdzil Quran" },
    { name: "MTQ", icon: Mosque, description: "Musabaqah Tilawatil Quran"},
    { name: "CCI", icon: Target, description: "Cerdas Cermat Islami" },
    { name: "Adzan", icon: Volume2, description: "Lomba adzan" }
  ]

  const fees = [
    { category: "Pidato Islami", price: "Rp 50.000" },
    { category: "Busana Muslim", price: "Rp 75.000" },
    { category: "Kaligrafi", price: "Rp 50.000" },
    { category: "MHQ", price: "Rp 50.000" },
    { category: "MTQ", price: "Rp 50.000" },
    { category: "CCI", price: "Rp 75.000" },
    { category: "Adzan", price: "Rp 50.000" },
  ]

  const contacts = [
    { lomba: "Pidato Islami", cp: "Hayfa", phone: "0895403390370" },
    { lomba: "Busana Muslim", cp: "Alkayyisa", phone: "0895375254499" },
    { lomba: "Kaligrafi", cp: "Nadia", phone: "085624725388" },
    { lomba: "MHQ", cp: "Resya", phone: "085520709670" },
    { lomba: "MTQ", cp: "Fitri", phone: "08977770117" },
    { lomba: "CCI", cp: "Ibrahim", phone: "081315570190" },
    { lomba: "Adzan", cp: "Bagas", phone: "083849287088" },
    { lomba: "Info Umum", cp: "Fryla", phone: "085795006559" },
    { lomba: "Sponsorship", cp: "Ghaitsa", phone: "628998195544" },
    { lomba: "Tenant", cp: "Luthfi", phone: "6285721728984" },
    { lomba: "Pembayaran Offline", cp: "Ariqa", phone: "08888262704" },
  ]

  return (
    <div className="space-y-12 sm:space-y-16 py-12 sm:py-16">
      {/* Tentang Acara */}
      <section id="tentang" className="container mx-auto px-4">
        <Card className="glassmorphism">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl sm:text-3xl font-bold text-primary flex items-center justify-center gap-2">
              <Users className="h-6 sm:h-8 w-6 sm:w-8" />
              Tentang Acara
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose-lg max-w-none">
            <p className="text-center text-muted-foreground mb-6 text-sm sm:text-base">
              Forum Diskusi Umat (FDU) merupakan ajang perlombaan yang diselenggarakan oleh DKM Daarul Fikri SMA Negeri
              24 Bandung. Kegiatan ini diikuti oleh peserta dari tingkat SMP/MTs sederajat. FDU diselenggarakan selama
              dua hari, dengan hari pertama diisi oleh rangkaian perlombaan, dan hari kedua ditutup dengan kegiatan
              Tabligh Akbar.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8">
              <div className="text-center">
                <Calendar className="h-8 sm:h-12 w-8 sm:w-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-base sm:text-lg">Tanggal</h3>
                <p className="text-muted-foreground text-sm sm:text-base">04 Oktober 2025</p>
              </div>
              <div className="text-center">
                <MapPin className="h-8 sm:h-12 w-8 sm:w-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-base sm:text-lg">Lokasi</h3>
                <p className="text-muted-foreground text-sm sm:text-base">SMA Negeri 24 Bandung</p>
              </div>
              <div className="text-center">
                <Trophy className="h-8 sm:h-12 w-8 sm:w-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-base sm:text-lg">Kategori</h3>
                <p className="text-muted-foreground text-sm sm:text-base">SMP/MTs Sederajat</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <h3 className="font-semibold text-lg mb-4">Agenda</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground">• Perlombaan Islami</p>
                <p className="text-muted-foreground">• Tabligh Akbar</p>
                <p className="text-muted-foreground">• Penampilan-penampilan</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Jenis Perlombaan */}
      <section id="lomba" className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Jenis Perlombaan</h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Berbagai kategori lomba islami yang dapat diikuti
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {competitions.map((comp, index) => {
            const IconComponent = comp.icon
            return (
              <Card key={index} className="glassmorphism hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardHeader className="text-center pb-2 sm:pb-6">
                  <IconComponent className="h-8 sm:h-12 w-8 sm:w-12 text-primary mx-auto mb-2" />
                  <CardTitle className="text-base sm:text-lg">{comp.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs sm:text-sm text-muted-foreground text-center mb-3">{comp.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <div className="text-center mt-8">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            onClick={() => window.open("https://bit.ly/GuidebookFDU2025", "_blank")}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Unduh Booklet Lomba
          </Button>
        </div>
      </section>

      {/* Pendaftaran */}
      <section id="pendaftaran" className="container mx-auto px-4">
        <Card className="glassmorphism">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-primary">Pendaftaran Lomba</CardTitle>
            <CardDescription>Daftarkan diri Anda sekarang juga!</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-6 text-muted-foreground">
              Pendaftaran dapat dilakukan melalui link berikut. Pastikan mengisi semua data dengan benar dan melengkapi
              persyaratan yang diperlukan.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              onClick={() => window.open("https://bit.ly/PendaftaranLombaFDU2025", "_blank")}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Daftar Sekarang
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Biaya Perlombaan */}
      <section id="biaya" className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
            <DollarSign className="h-6 sm:h-8 w-6 sm:w-8" />
            Biaya Perlombaan
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">Rincian biaya untuk setiap kategori lomba</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {fees.map((fee, index) => (
            <Card key={index} className="glassmorphism">
              <CardContent className="p-3 sm:p-4 flex justify-between items-center">
                <span className="font-medium text-sm sm:text-base">{fee.category}</span>
                <Badge variant="secondary" className="bg-primary text-primary-foreground text-xs sm:text-sm">
                  {fee.price}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="glassmorphism">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Metode Pembayaran</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm sm:text-base">
              <p>
                <strong>Pembayaran Online:</strong>
                <br />
                Bank BJB Syariah
                <br />
                No. Rek: 0080206035114
                <br />
                a/n DKM DAARUL FIKRI SMAN 24 Bandung
              </p>
              <p>
                <strong>Pembayaran Offline:</strong>
                <br />
                Hubungi 08888262704 (Ariqa)
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-4">
                *Upload bukti pembayaran di link pendaftaran lomba
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Tempat Perlombaan */}
      <section id="tempat" className="container mx-auto px-4">
        <Card className="glassmorphism">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-primary flex items-center justify-center gap-2">
              <MapPin className="h-8 w-8" />
              Tempat Perlombaan
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">SMA Negeri 24 Bandung</h3>
              <p className="text-muted-foreground">
                Jl. Buah Batu No.124, Cijagra, Kec. Lengkong, Kota Bandung, Jawa Barat 40265
              </p>
              <Badge variant="outline" className="text-primary border-primary">
                ✅ Lokasi Strategis & Mudah Diakses
              </Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Partnership */}
      <section id="partnership" className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Partnership</h2>
          <p className="text-muted-foreground">Bergabunglah sebagai mitra dalam acara FDU 2025</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="glassmorphism text-center">
            <CardHeader>
              <CardTitle className="text-lg">Sponsor Utama</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Dukung acara sebagai sponsor utama</p>
            </CardContent>
          </Card>
          <Card className="glassmorphism text-center">
            <CardHeader>
              <CardTitle className="text-lg">Media Partner</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Liputan dan publikasi acara</p>
            </CardContent>
          </Card>
          <Card className="glassmorphism text-center">
            <CardHeader>
              <CardTitle className="text-lg">Sponsor Alternatif</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Dukungan tambahan untuk acara</p>
            </CardContent>
          </Card>
          <Card className="glassmorphism text-center">
            <CardHeader>
              <CardTitle className="text-lg">Donatur</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Kontribusi untuk kesuksesan acara</p>
            </CardContent>
          </Card>
          <Card className="glassmorphism text-center">
            <CardHeader>
              <CardTitle className="text-lg">Tenant</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Stand pameran dan penjualan</p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center space-x-4">
          <Button
            variant="outline"
            className="glassmorphism bg-transparent"
            onClick={() => window.open("https://bit.ly/BookletSponsorshipFDU2025", "_blank")}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Booklet Sponsorship
          </Button>
          <Button
            variant="outline"
            className="glassmorphism bg-transparent"
            onClick={() => window.open("https://bit.ly/BookletTenantFDU2025", "_blank")}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Booklet Tenant
          </Button>
          <Button
            variant="outline"
            className="glassmorphism bg-transparent"
            onClick={() => window.open("https://bit.ly/PartnershipFDU2025", "_blank")}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Daftar Partnership
          </Button>
        </div>
      </section>

      {/* Kontak */}
      <section id="kontak" className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
            <Phone className="h-6 sm:h-8 w-6 sm:w-8" />
            Kontak
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Hubungi contact person untuk informasi lebih lanjut
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {contacts.map((contact, index) => (
            <Card key={index} className="glassmorphism">
              <CardContent className="p-3 sm:p-4">
                <div className="flex justify-between items-center">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm sm:text-base truncate">{contact.lomba}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground truncate">{contact.cp}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      window.open(
                        `https://wa.me/${contact.phone.startsWith("62") ? contact.phone : "62" + (contact.phone.startsWith("0") ? contact.phone.substring(1) : contact.phone)}`,
                        "_blank",
                      )
                    }
                    className="glassmorphism hover:bg-green-500 hover:text-white transition-colors ml-2 flex-shrink-0"
                  >
                    <Phone className="h-3 sm:h-4 w-3 sm:w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
