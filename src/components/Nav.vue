<template>
    <nav class="py-4 text-sm font-medium flex justify-between">
      <ul class="flex space-x-3">
        <slot></slot>
      </ul>
      <div>
        <slot name="buttons"></slot>
      </div>
    </nav>
  </template>