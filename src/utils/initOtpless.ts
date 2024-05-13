// Add this function to your utilities file or wherever you manage your helper functions
export const initOTPless = (callback: Function) => {
  const otplessInit = Reflect.get(window, 'otplessInit')

  const loadScript = () => {
    const isScriptLoaded = document.getElementById('otpless-sdk')
    if (isScriptLoaded) return

    const script = document.createElement('script')
    script.src = 'https://otpless.com/v2/auth.js'
    script.id = 'otpless-sdk'
    script.setAttribute('data-appid', 'RM2I31PAOMTTAJ0UGFLP')
    document.body.appendChild(script)
  }

  otplessInit ? otplessInit() : loadScript()

  // Pass the callback function to the initOTPless function
  Reflect.set(window, 'otpless', (response: any) => {
    // console.log('Response:', response)
    // Call the callback function with the response data
    callback(response)
  })

  var response: false
}
