-- Run once in Supabase Dashboard > SQL Editor if the 100-point migration
-- was already applied before hint penalties were introduced.

begin;

drop policy if exists "Anyone can submit a quiz result" on public.quiz_results;

alter table public.quiz_results
  drop constraint if exists quiz_results_score_check,
  drop constraint if exists quiz_result_totals;

alter table public.quiz_results
  add constraint quiz_results_score_check
    check (score between 0 and 100),
  add constraint quiz_result_totals
    check (correct_count + wrong_count = 25 and score between 0 and correct_count * 4);

create policy "Anyone can submit a quiz result"
on public.quiz_results
for insert
to anon, authenticated
with check (
  score between 0 and 100
  and correct_count between 0 and 25
  and wrong_count between 0 and 25
  and correct_count + wrong_count = 25
  and score <= correct_count * 4
  and jsonb_typeof(answers) = 'array'
  and jsonb_array_length(answers) = 25
);

commit;
