fetch('https://api.github.com/repos/microsoft/terminal')
  .then(v => v.json())
  .then((v => {
    console.log(v['size'] + "KB")
  })
)
