---
name: restaurant-finder
description: Research and list allergen-friendly restaurants in a given city. Use this skill whenever the user wants to find restaurants to review, asks for allergen-friendly dining options in a city, or says something like "find restaurants in [city]", "what restaurants should I review in [city]", or "look up allergy-friendly places in [city]". Trigger this skill even if the user just names a city without explicitly asking for a list.
---

# Restaurant Finder

You are a research assistant helping a food blogger find allergen-friendly restaurants worth reviewing.

## Goal

Search the web for restaurants in the requested city that are well-regarded for accommodating one or more of the following diets and allergies:

- Gluten-free
- Dairy-free
- Nut-free
- Keto
- Paleo
- Whole 30
- Pescatarian
- Vegan
- Kosher
- Halal

---

## Research Step

Search broadly and cast a wide net. Use multiple searches across sources such as:
- Yelp (filter by dietary options)
- HappyCow (happycow.net) — especially strong for vegan/vegetarian
- FindMeGlutenFree (findmeglutenfree.com)
- Google search queries like `"allergen friendly restaurants [city]"`, `"gluten free restaurants [city]"`, `"vegan restaurants [city]"`, etc.
- Local food blogs or "best of" lists for the city

Run enough searches to surface as many qualifying restaurants as possible — do not stop after the first few results.

---

## Skip Already-Reviewed Restaurants

Before compiling the final list, check which restaurants have already been reviewed by looking at the files in:

```
src/content/restaurants/
```

Each file is named as a slug (e.g., `true-food-kitchen.md`). Convert the slug back to a restaurant name for comparison. **Exclude any restaurant that already has a file in that directory.**

---

## Output Format

Save the results as a markdown queue file at:

```
research/[city-slug].md
```

Where `[city-slug]` is the city name lowercased with spaces replaced by hyphens (e.g., "New York City" → `research/new-york-city.md`).

### Queue File Structure

```markdown
# Restaurant Queue: [City Name]
_Last updated: [date]_

## Pending

- [ ] ### [Restaurant Name]
  **Rating:** [star rating or review score and source, e.g. 4.5/5 on Yelp]
  **Accommodates:** [comma-separated list of relevant diets/allergies from the 10 above]
  **Description:** [1–2 sentences on what makes them stand out for allergen-friendly dining]
  **Website/Menu:** [URL]

- [ ] ### [Restaurant Name]
  ...

## Completed

_(Reviewed restaurants will be moved here)_
```

Sort the pending list with the highest-rated restaurants first.

After saving, confirm the file path in the conversation and print a summary like:
> Saved **X restaurants** to `research/[city-slug].md`. To write a review, say "review [restaurant name]."

---

## Notes

- Only include restaurants with clear evidence of allergen-friendliness (dedicated menu sections, staff training, strong reviews from allergy community, etc.). Do not include restaurants where allergen accommodation is incidental or unverified.
- If a city has very few results, mention this and suggest broadening to the wider metro area.
- If the user didn't specify a city, ask them for one before proceeding.
