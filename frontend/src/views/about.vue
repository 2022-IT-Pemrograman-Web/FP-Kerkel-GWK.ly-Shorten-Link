<template>
<nav
      class="
        bg-white
        border-gray-200
        px-2
        sm:px-4
        py-2.5
        rounded
        dark:bg-gray-900
      "
    >
      <div
        class="
          w-full
          container
          flex flex-wrap
          items-center
          justify-between
          mx-auto
        "
      >
        <a class="flex items-center">
          <img
            src="https://cdn.discordapp.com/attachments/755395371429003315/1050316898081964072/WhatsApp_Image_2022-12-07_at_23.32_1.png"
            class="h-6 mr-3 sm:h-9"
          />
          <span
            class="
              self-center
              text-xl
              font-semibold
              whitespace-nowrap
              dark:text-white
            "
            >GWK.ly</span
          >
        </a>
        <div class="flex md:order-2">
          <button
            type="button"
            class="
              ease-in-out
              duration-300
              text-white
              bg-gradient-to-r
              from-green-900
              to-green-600
              hover:bg-blue-800
              focus:ring-4 focus:outline-none focus:ring-blue-300
              font-medium
              rounded-lg
              text-sm
              px-5
              py-2.5
              text-center
              mr-3
              md:mr-0
              dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
            "
            @click="signOut"
          >
            Log Out
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            class="
              inline-flex
              items-center
              p-2
              text-sm text-gray-500
              rounded-lg
              md:hidden
              hover:bg-gray-100
              focus:outline-none focus:ring-2 focus:ring-gray-200
              dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
            "
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="
            items-center
            justify-between
            hidden
            w-full
            md:flex md:w-auto md:order-1
          "
          id="navbar-cta"
        >
          <ul
            class="
              flex flex-col
              p-4
              mt-4
              border border-gray-100
              rounded-lg
              bg-gray-50
              md:flex-row
              md:space-x-8
              md:mt-0
              md:text-sm
              md:font-medium
              md:border-0
              md:bg-white
              dark:bg-gray-800
              md:dark:bg-gray-900
              dark:border-gray-700
            "
          >
            <li>
              <a
                href="/home"
                class="
                  block
                  py-2
                  pl-3
                  pr-4
                  text-white
                  bg-green-700
                  rounded
                  md:bg-transparent md:text-emerald-400 md:p-0
                  dark:text-white
                "
                aria-current="page"
                >Home</a
              >
            </li>
            <li>
              <a
                href="/about"
                class="
                  block
                  py-2
                  pl-3
                  pr-4
                  text-gray-700
                  rounded
                  hover:bg-gray-100
                  md:hover:bg-transparent
                  md:hover:text-green-700
                  md:p-0
                  md:dark:hover:text-white
                  dark:text-gray-400
                  dark:hover:bg-gray-700
                  dark:hover:text-white
                  md:dark:hover:bg-transparent
                  dark:border-gray-700
                "
                >About</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
<!-- ======================================================= -->
<!-- <div class="section bg-blue-100">
  <div class="section-title">OUR TEAM</div>
  <div class="section-subtitle">Meet our skilled professionals.</div>

  <div class="flex justify-center flex-wrap">
    <div class="card">
      <img class="card-image" src="jessica.jpg" />
      <p class="card-title">Jessica Thompson</p>
      <p class="card-subtitle">UI Artisan</p>
      <div class="card-icons">
        <i class="fab fa-facebook-square fa-2x card-icon"></i>
        <i class="fab fa-twitter-square fa-2x card-icon"></i>
        <i class="fab fa-google-plus-square fa-2x card-icon"></i>
      </div>
    </div>
    ...
  </div>
</div> -->
<div class="rounded-full">
<h1 style="font-family: Montserrat" class="max-h-96 text-5xl font-bold mt-0 mb-6 text-center text-emerald-400 py-20 px-6">OUR TEAM</h1>
</div>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">

<section style="font-family: Montserrat" class=" border-gray-200 flex font-medium items-center justify-center">
    <section class="w-64 mx-auto bg-gray-900 border border-emerald-400 hover:shadow-md rounded-2xl px-8 py-6 shadow-lg min-w-fit">
        <div class="flex items-center justify-between">
            <span class="text-emerald-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </span>
        </div>
        <div class="mt-6 w-fit mx-auto">
            <img src="../assets/goan.jpg" class="rounded-full w-28 " alt="profile picture" srcset="">
        </div>

        <div class="mt-8 ">
            <h2 class="text-white font-bold text-lg text-center tracking-wide text-emerald-400">Yoga<br/>Hartono
             <p class="text-green-800 font-semibold mt-2.5" >
              ------------------------- 
             </p>
             <p class="text-emerald-400 font-semibold mt-2.5" >
                5027211023
             </p>
            </h2>
        </div>
        <p class="text-emerald-400 font-semibold mt-2.5" >
            Active
        </p>
    </section>

    <section class="w-64 mx-auto bg-gray-900 border border-emerald-400 hover:shadow-md rounded-2xl px-8 py-6 shadow-lg min-w-fit">
        <div class="flex items-center justify-between">
            <span class="text-emerald-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </span>
        </div>
        <div class="mt-6 w-fit mx-auto">
            <img src="../assets/krisna.jpg" class="rounded-full w-28 " alt="profile picture" srcset="">
        </div>

        <div class="mt-8 ">
            <h2 class="text-white font-bold text-lg text-center tracking-wide text-emerald-400">Made<br/>Krisnanda Utama
             <p class="text-green-800 font-semibold mt-2.5" >
              ------------------------- 
             </p>
             <p class="text-emerald-400 font-semibold mt-2.5" >
              05311840000033
             </p>
            </h2>
        </div>
        <p class="text-emerald-400 font-semibold mt-2.5" >
            Active
        </p>
    </section>

    <section class="w-64 mx-auto bg-gray-900 border border-emerald-400 hover:shadow-md rounded-2xl px-8 py-6 shadow-lg min-w-fit">
        <div class="flex items-center justify-between">
            <span class="text-emerald-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </span>
        </div>
        <div class="mt-6 w-fit mx-auto">
            <img src="../assets/wika.jpg" class="rounded-full w-28 " alt="profile picture" srcset="">
        </div>

        <div class="mt-8 ">
            <h2 class="text-white font-bold text-lg text-center tracking-wide text-emerald-400">Wisnu<br/>Adjie Saka 
             <p class="text-green-800 font-semibold mt-2.5" >
                ------------------------- 
             </p>
             <p class="text-emerald-400 font-semibold mt-2.5" >
                5027211051
             </p>
            </h2>
        </div>
        <p class="text-emerald-400 font-semibold mt-2.5" >
            Active
        </p>
    </section>
    
</section>
</template>


<script>


</script>

