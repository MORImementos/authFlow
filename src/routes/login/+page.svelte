<script lang="ts">
    import type { PageData } from './$types';
    import { superForm } from 'sveltekit-superforms/client';
    import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

    export let data: PageData;
  
    // Client API:
    const { form, errors, constraints, enhance } = superForm(data.form);

  </script>

  {#if data}
  <!-- <div>{data.username}</div> -->
  {/if}
  <SuperDebug data={$form} />

  <form method="POST" use:enhance>
    <label for="Email">Email</label>
    <input 
        type="email" 
        name="Email" 
        aria-invalid={$errors.Email ? 'true' : undefined}
        bind:value={$form.Email}
        {...$constraints.Email} />
        {#if $errors.Email}<span class="invalid">{$errors.Email}</span>{/if}

  
    <label for="Password">Password</label>
    <input 
        type="password" 
        name="Password" 
        aria-invalid={$errors.Password ? 'true' : undefined}
        bind:value={$form.Password}
        {...$constraints.Password} />

    {#if $errors.Password}<span class="invalid">{$errors.Password}</span>{/if}
    <div><button>Submit</button></div>
  </form>

  <style>
    .invalid {
        color: red;
    }
  </style>