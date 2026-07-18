# 🚀 LuminaAI Web Builder

<p align="center"><i>Yapay Zeka Yardımıyla Harika Web Siteleri İnşa Edin</i></p>
<p align="center">En son yapay zeka teknolojisini kullanarak fikirlerinizi tamamen çalışan web sitelerine dönüştürün.</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/Lisans-MIT-green.svg" alt="License MIT">
  </a>
  <img src="https://img.shields.io/badge/Geli%C5%9Ftirici-Halil%20TEK-blue" alt="Geliştirici">
  <img src="https://img.shields.io/badge/Dil-T%C3%BCrk%C3%A7e-orange" alt="Dil Türkçe">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Convex-FF6F61?style=for-the-badge&logo=convex&logoColor=white" />
  <img src="https://img.shields.io/badge/Gemini_AI-4285F4?style=for-the-badge&logo=google&logoColor=white" />
</p>

---

## Proje Hakkında 🌟

**LuminaAI Web Builder**, yapay zekanın gücünü (Google Gemini API) modern web teknolojileriyle birleştirerek web geliştirmede devrim yaratan son teknoloji bir platformdur. Sadece doğal dilde (Türkçe) ne istediğinizi yazarak, herhangi bir kodlama deneyimine ihtiyaç duymadan harika ve üretime hazır web uygulamaları tasarlayabilirsiniz!

### Öne Çıkan Özellikler 🚀

*   **Yapay Zeka Destekli Sihir**: Doğal dilden anında React kodları üretir.
*   **Gerçek Zamanlı Kod Önizleme**: Tarayıcıda yerleşik Sandbox (Sandpack) ile kodları canlı olarak çalıştırır ve gösterir.
*   **Dosya İndirme Sistemi**: Oluşturulan tüm React + Vite proje kodlarını tek tıkla `.zip` olarak bilgisayarınıza indirebilirsiniz.
*   **İstemi İyileştirme (Enhance Prompt)**: Yapay zekaya göndereceğiniz kısa cümleleri "Sihirli Değnek" butonu ile otomatik olarak daha detaylı istemlere dönüştürür.
*   **Mobil Uyumlu**: Tamamen responsive ve modern Tailwind CSS ile tasarlanmıştır.

---

## Proje Mimarisi 📂

```mermaid
graph TB
    A[Kullanıcı Arayüzü] -->|İstekler| B[Next.js App Router]
    B --> C[API Rotaları]
    C --> D[Gemini AI API]
    C --> E[Convex Backend]
    E --> F[(Gerçek Zamanlı Veritabanı)]
    D -->|AI Yanıtı| C
    E -->|Canlı Güncellemeler| B
    B -->|Sunucu Bileşenleri| G[React Bileşenleri]
    G --> H[Tailwind Stil Giydirme]
    
    style A fill:#f9f,stroke:#333,stroke-width:4px
    style D fill:#4285F4,stroke:#333,stroke-width:2px
    style E fill:#FF6F61,stroke:#333,stroke-width:2px
```

### 📁 Klasör Yapısı

```bash
ai-website-builder/
│
├── 📂 app/                    # Next.js App Router Sayfaları
│   ├── 📂 api/               # API Uç Noktaları (ai-chat, gen-ai-code vb.)
│   ├── 📂 (main)/            # Workspace Sayfaları
│   └── 📄 layout.js          # Genel Sayfa Düzeni
│
├── 📂 components/            # Yeniden Kullanılabilir Bileşenler
│   ├── 📂 custom/            # Özel Bileşenler (Hero, Header, ChatView, CodeView)
│   └── 📂 ui/                # Shadcn UI Bileşenleri
│
├── 📂 configs/              # Yapay Zeka Modeli Yapılandırmaları
│   └── 📄 AiModel.jsx        # Gemini Bağlantısı
│
├── 📂 convex/              # Convex Backend Servisi (Veritabanı Şeması ve Mutasyonlar)
│   ├── 📄 schema.js          # Tablo Şemaları
│   └── 📄 workspace.js       # Sorgular
│
└── 📄 package.json           # Bağımlılıklar ve Çalıştırma Komutları
```

---

## Hızlı Başlangıç 🛠️

### 📋 Gereksinimler
*   Bilgisayarınızda **Node.js** (v18 veya üzeri) kurulu olmalıdır.
*   Bir **Google Gemini API Key** almanız gerekmektedir.
*   Bir **Convex** hesabı ve projesi oluşturulmalıdır.

### 🚀 Kurulum Adımları

1.  **Depoyu Klonlayın ve Bağımlılıkları Yükleyin**
    ```bash
    git clone https://github.com/haliltek/ai-website-builder.git
    cd ai-website-builder
    npm install
    ```

2.  **Ortam Değişkenlerini Yapılandırın**
    Projenin ana dizininde `.env.local` dosyası oluşturun ve aşağıdaki değişkenleri tanımlayın:
    ```env
    # Gemini Yapay Zeka Anahtarı
    NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
    
    # Convex Veritabanı URL'si (npx convex dev çalıştırıldığında otomatik de üretilebilir)
    NEXT_PUBLIC_CONVEX_URL=your_convex_deployment_url
    ```

3.  **Geliştirici Sunucusunu Başlatın**
    Next.js geliştirici sunucusunu başlatmak için:
    ```bash
    npm run dev
    ```
    Yeni bir terminal açıp Convex veritabanı eşlemesini ve sunucusunu başlatmak için:
    ```bash
    npx convex dev
    ```
    Tarayıcınızdan **[http://localhost:3000](http://localhost:3000)** adresine giderek uygulamayı kullanmaya başlayabilirsiniz!

---

## Kullanım Örnekleri 💬

| İsteminiz (Prompt) | Yapay Zekanın Ürettiği Çıktı |
| :--- | :--- |
| `"Bir SaaS ürünü için kahraman (hero) alanı, özellikler tablosu ve fiyat kartları içeren modern bir landing page tasarla"` | <ul><li>Tüm React bileşenleri</li><li>Responsive Tailwind CSS tasarımı</li><li>Tıklanabilir ve etkileşimli alanlar</li><li>Tamamen Türkçe içerik</li></ul> |

---

## Teşekkürler ve Referanslar 💖
Bu projeyi geliştirmemizde katkısı olan veya ilham veren kütüphanelere teşekkür ederiz:
*   [Google Gemini API](https://ai.google.dev/) - Güçlü yapay zeka altyapısı için.
*   [Convex](https://convex.dev/) - Gerçek zamanlı ve hızlı veritabanı altyapısı için.
*   [CodeSandbox Sandpack](https://sandpack.codesandbox.io/) - Tarayıcı içi canlı React derleyicisi için.
*   [Tailwind CSS](https://tailwindcss.com/) - Harika ve hızlı tasarım imkanı sunduğu için.

---
**Mutlu Kodlamalar!** 🚀 • [Halil TEK](https://github.com/haliltek)
