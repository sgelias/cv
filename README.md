# Generate Static Version of the Curriculum Vitae

## Generate PDF

```bash
pandoc src/cv.md --from=markdown+raw_html --pdf-engine=xelatex -V mainfont="Times New Roman" -V geometry:margin=1in -o cv.pdf
```
