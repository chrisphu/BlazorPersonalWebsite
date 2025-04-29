# Blazor personal website

This is the static [Blazor](https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor) web app that serves as my website at https://www.chrisphu.com. It utilizes [Tailwind CSS](https://tailwindcss.com).

## Notes

- On 28 April 2025, I started updating my website again after having not done so for about six months. Although the build preview worked fine, the app had a new error (below) when deployed. For anyone Googling issues in the future and stumbling across this note: sorry, I didn't figure out how to fix it. As far as I can tell, some package update broke something, but various trial-and-error upgrades/downgrades didn't resolve my issues.

```
blazor.webassembly.js:1 ManagedError: One or more errors occurred. (Could not load type of field 'Microsoft.AspNetCore.Components.WebAssembly.Hosting.WebAssemblyHostBuilder:<Configuration>k__BackingField' (4) due to: Could not resolve type with token 010000b6 from typeref (expected class 'Microsoft.Extensions.Configuration.IConfigurationRoot' in assembly 'Microsoft.Extensions.Configuration.Abstractions, Version=8.0.0.0, Culture=neutral, PublicKeyToken=adb9793829ddae60') assembly:Microsoft.Extensions.Configuration.Abstractions, Version=8.0.0.0, Culture=neutral, PublicKeyToken=adb9793829ddae60 type:Microsoft.Extensions.Configuration.IConfigurationRoot member:(null))
    at Jn (dotnet.runtime.8.0.15.pdm8tx6jky.js:3:31615)
    at Ll (dotnet.runtime.8.0.15.pdm8tx6jky.js:3:182497)
    at dotnet.native.wasm:0x1fa68
    at dotnet.native.wasm:0x1bf2f
    at dotnet.native.wasm:0xf017
    at dotnet.native.wasm:0x1e782
    at dotnet.native.wasm:0x1ef78
    at dotnet.native.wasm:0xce61
    at dotnet.native.wasm:0x44399
    at e.<computed> (dotnet.runtime.8.0.15.pdm8tx6jky.js:3:216288)
callEntryPoint @ blazor.webassembly.js:1
```

- On 29 April 2025, I started a new Blazor WebAssembly app from template because of the issues above. I migrated all the content over and it seems to be working fine now. Downside is that the template ([Blazor's own quick start](https://dotnet.microsoft.com/en-us/learn/aspnet/blazor-tutorial/create)) starts on .NET 7.0. A few miserable trial-and-error upgrades/downgrades later and I resolved just to stick with .NET 7.0 for now. I'll have to revisit this in the future.