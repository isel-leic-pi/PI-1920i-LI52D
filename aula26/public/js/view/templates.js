const homeTemplate = 
    Handlebars.compile(`
      <h1>B4 Application</h1>
      <img src="{{bigodes}}"/>
      <p>
        <a href="#bundles">All bundles</a>
      <p>
    `)



const bundlesTableTemplate = 
    Handlebars.compile(
          `<table>
            <tr>
              <th>Name1</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
            {{#each this}}
              <tr>
                <td><a href='#bundleDetails/{{id}}'>{{name}}</a></td>
                <td>{{description}}</td>
                <td><button class="delete" id="{{id}}">Delete {{name}}</button>
              </tr>
            {{/each}}
          </table>
        `)


const bundleTemplate = 
    Handlebars.compile(
          `<ul>
            <li>{{name}}</li>
            <li>{{description}}</li>
          </ul>
        `)
