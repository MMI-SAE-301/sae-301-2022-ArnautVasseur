<template>
    <div class="h-Card w-Card bg-gradient-radial from-[rgba(0,0,0,0.1)] to-black rounded-3xl relative">
        <slot name="image"></slot>
        <div
            class="bg-LightGray w-[480px] h-10 absolute bottom-4 left-0 right-0 m-auto rounded-full text-black flex justify-center items-center font-semibold text-lg">
            <slot name="text"></slot>
        </div>
    </div>
</template>