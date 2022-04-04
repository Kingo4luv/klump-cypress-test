<template>
	<div class="card-footer d-flex align-items-center">
		<p class="m-0 text-muted">
			Showing <span>{{ Number(offset) === 0 ? 1 : nextOffset }}</span> to
			<span>{{ isLastPage ? total : Number(currentPage) * Number(limit) }}</span> of
			<span>{{ options.total }}</span> entries
		</p>
		<ul class="pagination m-0 ml-auto">
			<li class="page-item" :class="{ disabled: isFirstPage }">
				<router-link class="page-link" :to="prev" tabindex="-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" />
						<polyline points="15 6 9 12 15 18" />
					</svg>
					prev
				</router-link>
			</li>
			<li v-if="pages.length > 20" class="d-flex">
				<span
					v-for="page in pages.slice(getPageRange.lowerBound, getPageRange.upperBound)"
					:key="page.pageNumber"
					class="page-item"
					:class="{ active: page.pageNumber === getCurrentPage }"
				>
					<router-link
						class="page-link"
						:to="`${getPath}?offset=${page.pageOffset}&limit=${limit}&page=${page.pageNumber}`"
						>{{ page.pageNumber }}</router-link
					>
				</span>
			</li>
			<li v-if="pages.length < 20" class="d-flex">
				<span
					v-for="page in pages"
					:key="page.pageNumber"
					class="page-item"
					:class="{ active: page.pageNumber === getCurrentPage }"
				>
					<router-link
						class="page-link"
						:to="`${getPath}?offset=${page.pageOffset}&limit=${limit}&page=${page.pageNumber}`"
						>{{ page.pageNumber }}</router-link
					>
				</span>
			</li>
			<li class="page-item" :class="{ disabled: isLastPage }">
				<router-link class="page-link" :to="next">
					next
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" />
						<polyline points="9 6 15 12 9 18" />
					</svg>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
	name: 'Pagination',
	props: {
		options: {
			type: Object,
			required: true
		},
		path: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			total: this.options.total,
			limit: this.options.limit,
			offset: this.$route.query.offset ? this.$route.query.offset : 0,
			totalPages: Math.ceil(this.options.total / this.options.limit),
			pages: [],
			currentPage: this.$route.query.page ? this.$route.query.page : 1
		};
	},
	computed: {
		...mapGetters(['getPageRange']),
		getPath() {
			const path = this.path ? this.path : this.$route.path;
			return path;
		},
		getCurrentPage() {
			return Number(this.currentPage);
		},
		isFirstPage() {
			return Number(this.currentPage) === 1;
		},
		isLastPage() {
			return Number(this.currentPage) === this.totalPages;
		},
		prev() {
			return `${this.getPath}?offset=${
				this.$route.query.offset ? Number(this.$route.query.offset) - 1 : 0
			}&limit=${this.limit}&page=${Number(this.currentPage) - 1}`;
		},
		next() {
			return `${this.getPath}?offset=${
				this.$route.query.offset ? Number(this.$route.query.offset) + 1 : this.offset + 1
			}&limit=${this.limit}&page=${Number(this.currentPage) + 1}`;
		},
		nextOffset() {
			return Number(this.limit) * Number(this.currentPage) - 9;
		}
	},
	watch: {
		$route(route) {
			if (route.query) {
				this.currentPage = route.query.page;
			}
		}
	},
	created() {
		this.pages = this.sequence(this.totalPages);
		this.setPaginationRange();
	},
	methods: {
		...mapMutations(['setPageRange', 'resetPageRange', 'setDefaultPageRange']),
		sequence(size) {
			const array = [];

			for (let i = 1; i <= size; i += 1) {
				array.push({ pageNumber: i, pageOffset: i - 1 });
			}

			return array;
		},
		setPaginationRange() {
			if (this.getCurrentPage < 7) {
				this.resetPageRange();
			}
			if (this.getCurrentPage === 7) {
				this.setDefaultPageRange();
			}
			if (this.getCurrentPage > 7) {
				this.setDefaultPageRange();
				const offset = this.getCurrentPage - 7;
				const pageOffset = {
					lower: offset,
					upper: offset
				};
				this.setPageRange(pageOffset);
			}
		}
	}
};
</script>
