---
layout: post
title:  "Markdown Overview"
date:   2020-11-05 08:56:42 -0700
categories: markdown
order: 1
---
Documentation: [GitHub Flavored Markdown](https://github.github.com/gfm/)
<table>
  <tr>
    <th>Element</th>
    <th>Syntax</th>
    <th>Example</th>
  </tr>
  <tr>
    <td>Headers</td>
    <td>## Header1 <br> # Header2</td>
    <td><h2>Header1</h2> <h1>Header2</h1></td>
  </tr>
  <tr>
    <td>Bold</td>
    <td>**bolded text**</td>
    <td><b>bolded text</b></td>
  </tr>
  <tr>
    <td>Italics</td>
    <td>*italicized text*</td>
    <td><em>italicized text</em></td>
  </tr>
  <tr>
    <td>Block Quote</td>
    <td>> block quote</td>
    <td><blockquote>block quote</blockquote></td>
  </tr>
  <tr>
    <td>Code Block</td>
    <td>
      {% highlight python %}<br>
      print('Hello, world')<br>
      {% endhighlight %}
    </td>
    <td>
      {% highlight python %}
print('Hello, world')
      {% endhighlight %}
    </td>
  </tr>
  <tr>
    <td>Inline Code</td>
    <td>Type `print('Hello')`</td>
    <td>Type <code>print('Hello')</code></td>
  </tr>
  <tr>
    <td>Link</td>
    <td>Here is a [link](https://google.com) to google.</td>
    <td>Here is a <a href='https://google.com'>link</a> to google.</td>
  </tr>
  <tr>
    <td>Ordered List</td>
    <td>1. First<br>2. Second<br>3. Third</td>
    <td>1. First<br>2. Second<br>3. Third</td>
  </tr>
  <tr>
    <td>Unordered List</td>
    <td>- First<br>- Second<br>- Third</td>
    <td><ul><li>First</li><li>Second</li><li>Third</li></ul></td>
  </tr>
  <tr>
    <td>Horizontal Break</td>
    <td>Any of:<br>***<br>---<br>___</td>
    <td><hr /></td>
  </tr>
  <tr>
    <td>Table</td>
    <td>
      | left | center | right |<br>
      | --- | :-: | --: |<br>
      | 1 | 2 | 3 | <br>
      | 4 | 5 | 6 |
    </td>
    <td><table>
      <tr>
        <th>left</th>
        <th align='center'>center</th>
        <th align='right'>right</th>
      </tr>
      <tr>
        <td>1</td>
        <td align='center'>2</td>
        <td align='right'>3</td>
      </tr>
      <tr>
        <td>4</td>
        <td align='center'>5</td>
        <td align='right'>6</td>
      </tr>
    </table></td>
  </tr>
</table>
