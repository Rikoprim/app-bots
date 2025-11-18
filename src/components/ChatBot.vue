<template>
  <div class="bg-white text-gray-900 font-sans min-h-screen flex flex-col">
    <!-- Header -->
    <header
      class="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200 sticky top-0 z-10"
    >
      <div class="flex items-center">
        <img src="/logo.png" width="33" alt="logo" />
        <span class="text-2xl font-extrabold ml-2">bot</span>
      </div>

      <div class="flex items-center gap-2">
        <div class="w-10 h-10 rounded-full flex items-center justify-center border border-gray-100">
          <img src="/icon/search.svg" width="22" alt="search" />
        </div>
        <div class="w-10 h-10 rounded-full flex items-center justify-center border border-gray-100">
          <img src="/icon/gear.svg" width="22" alt="gear" />
        </div>
        <button
          class="bg-primary-100 font-bold text-white px-4 py-2 rounded-full text-sm transition duration-200 flex items-center gap-2"
        >
          <img src="/icon/arrow.svg" width="14.5" alt="arrow" />
          Bagikan
        </button>
      </div>
    </header>

    <!-- Main content scrollable area -->
    <main
      class="flex-1 overflow-y-auto flex flex-col items-center justify-center px-4 py-12"
      v-if="disabledData"
    >
      <div class="text-left max-w-3xl">
        <h1 class="text-6xl leading-[55px] text-black sm:text-4xl font-bold mb-2">
          Hai, John <br />
          Apa yang ingin Anda ketahui?
        </h1>

        <div class="flex items-center mt-4 gap-2">
          <img src="/icon/book.svg" width="22" alt="book" />
          <div class="text-black text-base font-semibold">Contoh Pertanyaan</div>
        </div>

        <div class="flex flex-wrap gap-3 max-w-2xl mt-3 text-xs text-black">
          <div class="bg-white p-3 border border-gray-200 rounded-2xl">
            apa saja perizinan yang ada di bpbatam?
          </div>
          <div class="bg-white p-3 border border-gray-200 rounded-2xl">
            sebutkan apa saja persyaratan izin usaha kawasan (LDP)?
          </div>
          <div class="bg-white p-3 border border-gray-200 rounded-2xl">
            apakah membutuhkan NPWP untuk mengurus izin terbatas?
          </div>
        </div>
      </div>
    </main>
    <main class="flex-1 overflow-y-auto px-4 py-6" v-else>
      <div class="flex flex-col gap-4 max-w-3xl mx-auto w-full">
        <div class="flex items-start gap-3">
          <div
            class="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full font-bold"
          >
            <img src="/icon/response.svg" alt="response" width="25" />
          </div>
          <div
            class="bg-white border font-medium border-gray-200 rounded-2xl p-4 max-w-[80%] text-gray-900 text-sm leading-relaxed"
          >
            <p>Halo! Saya asisten digital bBot!. Anda bisa seputar peraturan BP Batam.</p>
            <span class="text-gray-400 block text-right text-xs mt-1">10:25 ✓✓</span>
          </div>
        </div>

        <div class="flex items-start justify-end gap-3">
          <div class="bg-primary-100 rounded-2xl p-4 max-w-[80%] leading-relaxed">
            <p class="text-white text-sm">apa saja perizinan yang ada di bpbatam?</p>
            <span class="text-white/70 text-xs block mt-1 text-right">11:25 ✓✓</span>
          </div>
          <img src="/avatar.png" alt="user" class="w-10 h-10 rounded-full object-cover" />
        </div>

        <div class="flex items-start gap-3">
          <div
            class="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full font-bold"
          >
            <img src="/icon/response.svg" alt="response" width="25" />
          </div>
          <div
            class="bg-white border border-gray-200 rounded-2xl p-4 max-w-[80%] text-gray-900 text-sm leading-relaxed"
          >
            <p class="font-semibold mb-2">
              BP Batam menyediakan berbagai layanan perizinan yang dapat dikelompokkan sebagai
              berikut:
            </p>
            <ol class="list-decimal ml-4 space-y-2">
              <li>
                <span class="font-semibold">Izin Usaha Kawasan</span>
                <ul class="list-disc ml-6">
                  <li>LDP (luar daerah pabean)</li>
                  <li>TLDPP (tempat lain dalam daerah pabean)</li>
                  <li>Kawasan Logistik</li>
                </ul>
              </li>
              <li><span class="font-semibold">Persetujuan Impor</span></li>
              <li><span class="font-semibold">Izin Terbatas (IT)</span></li>
            </ol>
            <p class="mt-2">Jika Anda membutuhkan informasi lebih detail, silakan tanyakan.</p>
            <span class="text-gray-400 text-xs block text-right mt-1">11:26 ✓✓</span>
          </div>
        </div>
      </div>
    </main>

    <!-- Input Section (fixed bottom with margin) -->
    <div class="sticky bottom-6 w-full flex justify-center">
      <div
        class="w-full max-w-3xl bg-white border border-gray-200 rounded-2xl flex items-center px-4 py-3 space-x-3"
        style="box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08)"
      >
        <div class="relative flex-1">
          <img
            src="/icon/paperclip.svg"
            alt="search"
            width="18px"
            height="auto"
            class="absolute left-3 top-1/2 -translate-y-1/2"
          />
          <input
            type="text"
            placeholder="Tanyakan apa saja..."
            class="w-full pl-10 pr-4 outline-none border-none text-black-100 placeholder-black-100"
            v-model="message"
          />
        </div>
        <div class="flex items-center gap-2">
          <div
            class="w-10 h-10 rounded-full flex items-center justify-center border border-gray-100"
          >
            <img src="/icon/smile.svg" width="22" alt="smile" />
          </div>
          <div
            class="w-10 h-10 rounded-full flex items-center justify-center border border-gray-100"
          >
            <img src="/icon/microphone.svg" width="22" alt="microphone" />
          </div>
          <button
            class="bg-primary-100 text-white px-4 py-2 rounded-full flex items-center gap-2 transition"
            @click="disabledData = !disabledData"
          >
            <span>Kirim</span>
            <img src="/icon/send.svg" width="17" alt="send" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      disabledData: false,
    }
  },
}
</script>
