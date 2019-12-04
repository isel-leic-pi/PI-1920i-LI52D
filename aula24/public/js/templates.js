const bundlesTableTemplate = 
    Handlebars.compile(
          `<table>
            <tr><th>Name1</th><th>Description</th></tr>
            {{#each this}}
              <tr><td><a href='#bundleDetails/{{id}}'>{{name}}</a></td><td>{{description}}</td></tr>
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
